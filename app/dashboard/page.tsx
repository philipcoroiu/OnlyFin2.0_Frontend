"use client"
import React, {FormEvent, useEffect, useState} from "react";
import TabsContainer from "./Tabs/TabsContainer";
import DashboardModules from "@/app/dashboard/DashbordModules";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import Link from "next/link";
import StockEditModal from "@/app/dashboard/Tabs/StockTabs/StockEditModal";
import CategoryEditModal from "@/app/dashboard/Tabs/CategoryTabs/CategoryEditModal";

export default function dashboardModuleBoard() {

    const [whoAmI, setWhoAmI] = useState<String>();

    const [activeStockTab, setActiveStockTab] = useState(0);
    const [activeCategoryTab, setActiveCategoryTab] = useState(0);

    const [userStockArray , setUserStockArray] = useState();
    const [userCategoryArray, setUserCategoryArray] = useState();

    const [stockEditButtonIsActive, setStockEditButtonIsActive] = useState(false);
    const [categoryEditButtonIsActive, setCategoryEditButtonIsActive] = useState(false);

    const [currentUserStockId  , setCurrentUserStockId ] = useState<number>(0);
    const [currentUserCategoryId, setCurrentUserCategoryId] = useState<number>(0);

    useEffect(() => {
        ApiCalls.whoAmI()
            .then((response) => {
                setWhoAmI(response.data)
                loadStockTab(response.data)
            })
    }, [])

    function loadStockTab(username : string) {
        ApiCalls.fetchTargetUsersStocks(username)
            .then((response) => {
                setUserStockArray(response.data)
                setCurrentUserStockId(response.data[0].id)
                getUserCategoryTabs(response.data[0].id)

                //TODO: Delete console.log
                console.log("userStockArray: ", response.data)
                console.log("fetchTargetUsersStocks, stock id: ", response.data[0].id)
            })
            .catch((error) => console.log("fetchTargetUsersStocks error: " , error))
    }

    function getUserCategoryTabs(userStockIDInput : number) {
        console.log("userStockID: ", userStockIDInput)
        ApiCalls.fetchCategoriesAndModulesUnderUserStock(userStockIDInput)
            .then((response) => {
                setUserCategoryArray(response.data.categories)
                setCurrentUserCategoryId(response.data.categories[0].userCategoryId)

                //TODO: Delete console.log
                console.log("getUserCategoryTabs: ", response.data.categories)
                console.log("currentCategoryId: ", response.data.categories[0].userCategoryId)
            })
            .catch((error) => console.log("fetchCategoriesAndModulesUnderUserStock error ", error))
    }

    function handleStockTabClick(index : number, stockId : number) : void {
        setActiveStockTab(index)
        setActiveCategoryTab(0)
        setCurrentUserStockId(stockId)
        getUserCategoryTabs(stockId)
    }

    function handleCategoryTabClick(index : number, categoryId : number) : void {
        setActiveCategoryTab(index)
        setCurrentUserCategoryId(categoryId)

        //TODO: Delete console.log
        console.log("Current category id: ", categoryId)
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
        //event.preventDefault();
        console.log(`You clicked on "New Category" with text: `, addCategoryInputName)
        ApiCalls.addCategory(currentUserStockId, addCategoryInputName)
    }

    function removeSelectedCategory() {
        ApiCalls.deleteCategory(currentUserCategoryId)
    }

    function handleChangeCategoryNameModalClick(event : FormEvent<HTMLFormElement>, changeCategoryNameInput : string) {
        ApiCalls.updateCategoryName(currentUserCategoryId, changeCategoryNameInput)
    }

    function handleRemoveSelectedStock() {
        ApiCalls.deleteStock(currentUserStockId)
    }

    function handleAddExistingStock(selectedStockId : number) {
        ApiCalls.addStock(selectedStockId)

        //TODO: Delete console.log
        console.log("pressed handleAddExistingStock, id: ", selectedStockId)
    }


    return (
        <>


            <StockEditModal
                stockEditButtonIsActive={stockEditButtonIsActive}
                handleStockEditButtonClick={handleStockEditButtonClick}
                handleRemoveSelectedStock={handleRemoveSelectedStock}
                handleAddExistingStock={handleAddExistingStock}
            ></StockEditModal>

            <CategoryEditModal
                categoryEditButtonIsActive={categoryEditButtonIsActive}
                handleCategoryEditButtonClick={handleCategoryEditButtonClick}
                handleAddCategoryModalClick={handleAddCategoryModalClick}
                removeSelectedCategory={removeSelectedCategory}
                handleChangeCategoryNameModalClick={handleChangeCategoryNameModalClick}
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

                        <Link href={"/users/" + whoAmI}>{whoAmI}</Link>

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
