"use client"

import React, {useEffect, useState} from "react";
import TabsContainer from "./Tabs/TabsContainer";
import DashboardModules from "@/app/dashboard/modulesContainer/DashbordModules";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import Link from "next/link";
import StockEditModal from "@/app/dashboard/Tabs/StockTabs/StockEditModal";
import CategoryEditModal from "@/app/dashboard/Tabs/CategoryTabs/CategoryEditModal";
import {useRouter} from "next/navigation";

export default function dashboardModuleBoard() {

    const router = useRouter()

    const [whoAmI, setWhoAmI] = useState<string>();

    const [activeStockTab, setActiveStockTab] = useState<number>(0) //TODO: should only be assigned by UI. maybe -1/undefined to signal no tab selected?
    const [activeCategoryTab, setActiveCategoryTab] = useState<number>(0) //TODO: should only be assigned by UI. maybe -1/undefined to signal no tab selected?

    const [userStockArray, setUserStockArray] = useState<OnlyfinUserStock[]>();
    const [userCategoryArray, setUserCategoryArray] = useState<OnlyfinUserCategoryTab[]>();

    const [stockEditButtonIsActive, setStockEditButtonIsActive] = useState<boolean>(false);
    const [categoryEditButtonIsActive, setCategoryEditButtonIsActive] = useState<boolean>(false);

    const [currentUserStockId, setCurrentUserStockId] = useState<number>(0);
    const [currentUserCategoryId, setCurrentUserCategoryId] = useState<number>(0);

    const [stockChange, setStockChange] = useState<boolean>(false)
    const [categoryChange, setCategoryChange] = useState<boolean>(false)


    useEffect(() => {
        ApiCalls.whoAmI()
            .then((response) => {
                if (response.status === 204) {
                    router.push("/login?redirect=dashboard")
                }

                const username: string = response.data

                setWhoAmI(username)
                loadStockTab(username)
            })
    }, [])

    useEffect(() => {
        if (whoAmI && stockChange) {
            setStockChange(false)
            loadStockTab(whoAmI)
            setActiveStockTab(0) //TODO: should only be assigned by UI. maybe -1/undefined to signal no tab selected?
            setActiveCategoryTab(0) //TODO: should only be assigned by UI. maybe -1/undefined to signal no tab selected?
        }
    }, [stockChange])

    useEffect(() => {
        if (whoAmI && categoryChange) {
            setCategoryChange(false)
            refreshUserCategoryTabs(currentUserStockId)
        }
    }, [categoryChange])

    function loadStockTab(username : string) {
        ApiCalls.fetchTargetUsersStocks(username)
            .then((response) => {
                const userStocks: OnlyfinUserStock[] = response.data

                setUserStockArray(userStocks)
                setCurrentUserStockId(userStocks[0].id)
                getUserCategoryTabs(userStocks[0].id)

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
                const stockTab: OnlyfinUserStockTab = response.data

                setUserCategoryArray(stockTab.categories)
                setCurrentUserCategoryId(stockTab.categories[0].userCategoryId)

                //TODO: Delete console.log
                console.log("getUserCategoryTabs: ", response.data.categories)
                console.log("currentCategoryId: ", response.data.categories[0].userCategoryId)
            })
            .catch((error) => console.log("fetchCategoriesAndModulesUnderUserStock error ", error))
    }

    function refreshUserCategoryTabs(userStockIDInput : number) {
        ApiCalls.fetchCategoriesAndModulesUnderUserStock(userStockIDInput)
            .then((response) => {
                const stockTab: OnlyfinUserStockTab = response.data

                setUserCategoryArray(stockTab.categories)
                setActiveCategoryTab(-1)

            })
            .catch((error) => console.log("[dashboard/temp.tsx:refreshUserCategoryTabs()]: " + error))
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
    function handleAddCategoryModalClick(addCategoryInputName : string) {
        console.log(`You clicked on "New Category" with text: `, addCategoryInputName)
        ApiCalls.addCategory(currentUserStockId, addCategoryInputName)
            .then(() => {
                console.log("Added category: ", addCategoryInputName)
                setCategoryChange(true)
            })
    }

    function removeSelectedCategory() {
        ApiCalls.deleteCategory(currentUserCategoryId)
            .then(response => {
                setCategoryChange(true)
            })
    }

    function handleChangeCategoryNameModalClick( changeCategoryNameInput : string) {
        ApiCalls.updateCategoryName(currentUserCategoryId, changeCategoryNameInput)
            .then(response => {
                setCategoryChange(true)
            })
    }

    function handleRemoveSelectedStock() {
        ApiCalls.deleteStock(currentUserStockId)
            .then(response => {
                setStockChange(true)
            })
    }

    function handleAddExistingStock(selectedStockId : number) {
        ApiCalls.addStock(selectedStockId)
            .then(response => {
                setStockChange(true)
            })

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
            />

            <CategoryEditModal
                categoryEditButtonIsActive={categoryEditButtonIsActive}
                handleCategoryEditButtonClick={handleCategoryEditButtonClick}
                handleAddCategoryModalClick={handleAddCategoryModalClick}
                removeSelectedCategory={removeSelectedCategory}
                handleChangeCategoryNameModalClick={handleChangeCategoryNameModalClick}
            />

                <div className="mx-auto
                md:mx-20
                max-w-full
                px-4 py-16
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
                        />

                        <Link href={"/users/" + whoAmI}>{whoAmI}</Link>

                        {
                            /* Toggle button */
                        }

                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"/>
                                <div
                                    className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                <span
                                    className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Edit</span>
                        </label>


                        <DashboardModules
                            userCategoryArray={userCategoryArray}
                            activeCategoryTab={activeCategoryTab}
                        />

                    </div>
                </div>
        </>
    )
}
