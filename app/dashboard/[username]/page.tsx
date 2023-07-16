"use client"
import React, {useEffect, useState} from "react";
import TabsContainer from "../Tabs/TabsContainer";
import DashboardModules from "@/app/dashboard/DashbordModules";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import Link from "next/link";
import StockEditModal from "@/app/dashboard/Tabs/StockTabs/StockEditModal";
import CategoryEditModal from "@/app/dashboard/Tabs/CategoryTabs/CategoryEditModal";



export default function dashboardModuleBoard({params}: { params: { username: string } }) {

    const [activeStockTab, setActiveStockTab] = useState(0);
    const [activeCategoryTab, setActiveCategoryTab] = useState(0);

    const [userStockArray , setUserStockArray] = useState();
    const [userCategoryArray, setUserCategoryArray] = useState();

    const [stockEditButtonIsActive, setStockEditButtonIsActive] = useState(false);
    const [categoryEditButtonIsActive, setCategoryEditButtonIsActive] = useState(false);

    useEffect(() => {
        ApiCalls.fetchTargetUsersStocks(params.username)
            .then((response) => {
                console.log("userStockArray: ", response.data)
                console.log("fetchTargetUsersStocks, stock id: ", response.data[0].id)
                setUserStockArray(response.data)
                getUserCategoryTabs(response.data[0].id)
            })
            .catch((error) => console.log("fetchTargetUsersStocks error: " , error))
    }, [])

    function getUserCategoryTabs(userStockID : number) {
        console.log("userStockID: ", userStockID)
        ApiCalls.fetchCategoriesAndModulesUnderUserStock(userStockID)
            .then((response) => {
                setUserCategoryArray(response.data.categories)
                console.log("getUserCategoryTabs: ", response.data.categories)
            })
            .catch((error) => console.log("fetchCategoriesAndModulesUnderUserStock error ", error))
    }

    function handleStockTabClick(index : number, stockId : number) : void {
        setActiveStockTab(index)
        setUserCategoryArray(undefined) // *** Is this a scuffed way of making the loading animation appear? *** //
        setActiveCategoryTab(0)
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

    return (
        <>


            <StockEditModal
                stockEditButtonIsActive={stockEditButtonIsActive}
                handleStockEditButtonClick={handleStockEditButtonClick}
            ></StockEditModal>

            <CategoryEditModal
                categoryEditButtonIsActive={categoryEditButtonIsActive}
                handleCategoryEditButtonClick={handleCategoryEditButtonClick}
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
