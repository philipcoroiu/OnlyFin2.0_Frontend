"use client"

import React, {FormEvent, useEffect, useState} from "react";
import TabsContainer from "../Tabs/TabsContainer";
import DashboardModules from "@/app/dashboard/modulesContainer/DashbordModules";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import Link from "next/link";
import StockEditModal from "@/app/dashboard/Tabs/StockTabs/StockEditModal";
import CategoryEditModal from "@/app/dashboard/Tabs/CategoryTabs/CategoryEditModal";

export default function dashboardModuleBoard({params}: { params: { username: string } }) {

    const [activeStockTab, setActiveStockTab] = useState<number>(0);
    const [activeCategoryTab, setActiveCategoryTab] = useState<number>(0);

    const [userStockArray , setUserStockArray] = useState<OnlyfinUserStock[]>();
    const [userCategoryArray, setUserCategoryArray] = useState<OnlyfinUserCategoryTab[]>();

    const [stockEditButtonIsActive, setStockEditButtonIsActive] = useState<boolean>(false);
    const [categoryEditButtonIsActive, setCategoryEditButtonIsActive] = useState<boolean>(false);

    const [currentUserStockId  , setCurrentUserStockId ] = useState<number>(0);

    useEffect(() => {
        loadStockTab()
    }, [])

    function loadStockTab() {
        ApiCalls.fetchTargetUsersStocks(params.username)
            .then((response) => {
                console.log("userStockArray: ", response.data)
                console.log("fetchTargetUsersStocks, stock id: ", response.data[0].id)
                setUserStockArray(response.data)
                setCurrentUserStockId(response.data[0].id)
                getUserCategoryTabs(response.data[0].id)
            })
            .catch((error) => console.log("fetchTargetUsersStocks error: " , error))
    }

    function getUserCategoryTabs(userStockIDInput : number) {
        console.log("userStockID: ", userStockIDInput)
        ApiCalls.fetchCategoriesAndModulesUnderUserStock(userStockIDInput)
            .then((response) => {
                setUserCategoryArray(response.data.categories)
                console.log("getUserCategoryTabs: ", response.data.categories)
            })
            .catch((error) => console.log("fetchCategoriesAndModulesUnderUserStock error ", error))
    }

    function handleStockTabClick(index : number, stockId : number) : void {
        setActiveStockTab(index)
        setActiveCategoryTab(0)
        setCurrentUserStockId(stockId)
        getUserCategoryTabs(stockId)
    }

    function handleCategoryTabClick(index : number) : void {
        setActiveCategoryTab(index)
    }

    function handleStockEditButtonClick() {
        setStockEditButtonIsActive(prevState => !prevState)
    }

    function handleCategoryEditButtonClick() {
        setCategoryEditButtonIsActive(prevState => !prevState)
    }

    {/******************
     * Modal Functions *
     *******************/}


    {/* TODO: Move this function to a modal container component instead! */}
    function handleAddCategoryModalClick(event : FormEvent<HTMLFormElement>, addCategoryInputName : string) {
        event.preventDefault();
        console.log(`You clicked on "New Category" with text: `, addCategoryInputName)
        //ApiCalls.addCategory(currentUserStockId, addCategoryInputName)
    }

    {/*
        function refreshCategoryTabs() {
            getUserCategoryTabs(userStockID)
        }
     */
    }

    return (
        <>


            <StockEditModal
                stockEditButtonIsActive={stockEditButtonIsActive}
                handleStockEditButtonClick={handleStockEditButtonClick}
            ></StockEditModal>

            <CategoryEditModal
                categoryEditButtonIsActive={categoryEditButtonIsActive}
                handleCategoryEditButtonClick={handleCategoryEditButtonClick}
                handleAddCategoryModalClick={handleAddCategoryModalClick}
            ></CategoryEditModal>

            <div className="">

                <div
                    className="mx-auto
                mx-20
                max-w-full
                px-4
                py-16
                sm:px-12
                sm:py-20
                lg:px-0">

                    <div className="px-10
                    py-10
                    overflow-y-auto
                    rounded-lg
                    bg-gray-700">

                        <TabsContainer
                            activeStockTab={activeStockTab}
                            userStockArray={userStockArray}
                            userCategoryArray={userCategoryArray}
                            activeCategoryTab={activeCategoryTab}
                            handleStockTabClick={handleStockTabClick}
                            handleCategoryTabClick={handleCategoryTabClick}
                            handleStockEditButtonClick={handleStockEditButtonClick}
                            handleCategoryEditButtonClick={handleCategoryEditButtonClick}

                            initialUserStockId={currentUserStockId}

                        ></TabsContainer>

                        <Link href={"/users/" + params.username}>{params.username}</Link>

                        <DashboardModules
                            userCategoryArray={userCategoryArray}
                            activeCategoryTab={activeCategoryTab}
                        ></DashboardModules>

                    </div>
                </div>
            </div>
        </>

    )
}
