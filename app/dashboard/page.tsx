"use client"

import React, {useEffect, useState} from "react";
import TabsContainer from "./Tabs/TabsContainer";
import DashboardModules from "@/app/dashboard/modulesContainer/DashbordModules";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import Link from "next/link";
import StockEditModal from "@/app/dashboard/Tabs/StockTabs/StockEditModal";
import CategoryEditModal from "@/app/dashboard/Tabs/CategoryTabs/CategoryEditModal";
import {useRouter} from "next/navigation";
import Avatar from "@/app/components/Avatar";
import DashGuideModalsContainer from "@/app/dashboard/components/DashGuideModalsContainer/DashGuideModalsContainer";
import Alert from "@/app/components/Alert";

export default function Page() {

    const router = useRouter()

    const [whoAmI, setWhoAmI] = useState<string>()

    const [activeStockTab, setActiveStockTab] = useState<number>(-1)
    const [activeCategoryTab, setActiveCategoryTab] = useState<number>(-1)

    const [userStockArray, setUserStockArray] = useState<OnlyfinUserStock[]>()
    const [userCategoryArray, setUserCategoryArray] = useState<OnlyfinUserCategoryTab[]>()

    const [stockEditButtonIsActive, setStockEditButtonIsActive] = useState<boolean>(false)
    const [categoryEditButtonIsActive, setCategoryEditButtonIsActive] = useState<boolean>(false)

    const [currentUserStockId, setCurrentUserStockId] = useState<number>(-1)
    const [currentUserCategoryId, setCurrentUserCategoryId] = useState<number>(-1)

    const [stockChange, setStockChange] = useState<boolean>(false)
    const [categoryChange, setCategoryChange] = useState<boolean>(false)

    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState("")

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
            setActiveStockTab(-1)
            setActiveCategoryTab(-1)
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
            })
            .catch((error) => console.log("fetchTargetUsersStocks error: " , error))
    }

    function getUserCategoryTabs(userStockIDInput : number) {
        ApiCalls.fetchCategoriesAndModulesUnderUserStock(userStockIDInput)
            .then((response) => {
                const stockTab: OnlyfinUserStockTab = response.data

                setUserCategoryArray(stockTab.categories)
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
        setCurrentUserStockId(stockId)
        getUserCategoryTabs(stockId)
    }

    function handleCategoryTabClick(index : number, categoryId : number) : void {
        setActiveCategoryTab(index)
        setCurrentUserCategoryId(categoryId)
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
        ApiCalls.addCategory(currentUserStockId, addCategoryInputName)
            .then(() => {
                setCategoryChange(true)
                setCategoryEditButtonIsActive(false)
            }).catch(() => {
                setCategoryEditButtonIsActive(false)
                setErrorMessage("No stock selected")
                setShowErrorMessage(true)
            }
        )
    }

    function removeSelectedCategory() {
        ApiCalls.deleteCategory(currentUserCategoryId)
            .then(() => {
                setCategoryChange(true)
                setCategoryEditButtonIsActive(false)
            }).catch(() => {
                setCategoryEditButtonIsActive(false)
                setErrorMessage("No category selected")
                setShowErrorMessage(true)
            }
        )
    }

    function handleChangeCategoryNameModalClick( changeCategoryNameInput : string) {
        ApiCalls.updateCategoryName(currentUserCategoryId, changeCategoryNameInput)
            .then(() => {
                setCategoryChange(true)
                setCategoryEditButtonIsActive(false)
            }).catch(() => {
                setCategoryEditButtonIsActive(false)
                setErrorMessage("No category selected")
                setShowErrorMessage(true)
            }
        )
    }

    function handleRemoveSelectedStock() {
        ApiCalls.deleteStock(currentUserStockId)
            .then(() => {
                setStockChange(true)
                setStockEditButtonIsActive(false)
            }).catch(() => {
                setStockEditButtonIsActive(false)
                setErrorMessage("No stock selected")
                setShowErrorMessage(true)
        }
        )
    }

    function handleAddExistingStock(selectedStockId : number) {
        ApiCalls.addStock(selectedStockId)
            .then(() => {
                setStockChange(true)
                setStockEditButtonIsActive(false)
            })
    }

    function handleAddCustomStock(stockName : string) {
        ApiCalls.addCustomStock(stockName, undefined)
            .then(() => {
                setStockEditButtonIsActive(false)
                setStockChange(true)
            })
    }

    return (
        <>
            <DashGuideModalsContainer
                userStockArray={userStockArray}
                userCategoryArray={userCategoryArray}
            />

            <StockEditModal
                stockEditButtonIsActive={stockEditButtonIsActive}
                handleStockEditButtonClick={handleStockEditButtonClick}
                handleRemoveSelectedStock={handleRemoveSelectedStock}
                handleAddExistingStock={handleAddExistingStock}
                handleAddCustomStock={handleAddCustomStock}
            />

            <CategoryEditModal
                categoryEditButtonIsActive={categoryEditButtonIsActive}
                handleCategoryEditButtonClick={handleCategoryEditButtonClick}
                handleAddCategoryModalClick={handleAddCategoryModalClick}
                removeSelectedCategory={removeSelectedCategory}
                handleChangeCategoryNameModalClick={handleChangeCategoryNameModalClick}
            />

            <div className="
                mx-2
                max-w-full
                px-0 sm:px-4
                py-4
                lg:py-10
                lg:px-10">

                <div className="
                        rounded-[calc(1.5rem-1px)]
                        px-4 sm:px-10
                        py-4
                        bg-white
                        dark:bg-gray-900
                        dark:border-0
                        border-2
                        border-blue-900
                        ">

                    <div className={`flex items-center text-center mb-4 justify-center sm:justify-start `}>
                        <div className={"w-16 h-16"}>
                            <Link href={"/me"}>
                                <Avatar username={whoAmI}></Avatar>
                            </Link>
                        </div>
                        <Link className={"font-bold text-xl"} href={"/me"}>{whoAmI}</Link>
                    </div>

                    {showErrorMessage && <Alert message={errorMessage} toggle={setShowErrorMessage} visible={showErrorMessage}></Alert>}

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

                    <DashboardModules
                        userCategoryArray={userCategoryArray}
                        activeCategoryTab={activeCategoryTab}
                        currentUserCategoryId={currentUserCategoryId}
                    />
                </div>
            </div>
        </>
    )
}