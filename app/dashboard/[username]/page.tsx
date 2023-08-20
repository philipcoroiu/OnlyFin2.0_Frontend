"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Avatar from "@/app/components/Avatar";
import TabsContainer from "@/app/dashboard/Tabs/TabsContainer";
import DashboardModules from "@/app/dashboard/modulesContainer/DashbordModules";
import { ApiCalls } from "@/app/utilities/ApiCalls";

export default function Page({params}: { params: { username: string } }) {

    const noTabSelectedStatusId: number = -1
    const switchingTabStatusId: number = -69

    const username = params.username

    const [activeStockTab, setActiveStockTab] = useState<number>(noTabSelectedStatusId)
    const [activeCategoryTab, setActiveCategoryTab] = useState<number>(noTabSelectedStatusId)

    const [userStockArray, setUserStockArray] = useState<OnlyfinUserStock[]>()
    const [userCategoryArray, setUserCategoryArray] = useState<OnlyfinUserCategoryTab[]>()

    const [currentUserStockId, setCurrentUserStockId] = useState<number>(noTabSelectedStatusId)
    const [currentUserCategoryId, setCurrentUserCategoryId] = useState<number>(noTabSelectedStatusId)

    //TODO: Place in tab container
    useEffect(() => {
        loadStockTab(username)
    }, [])

    function loadStockTab(username : string) {
        ApiCalls.fetchTargetUsersStocks(username)
            .then((response) => {
                const userStocks: OnlyfinUserStock[] = response.data

                setUserStockArray(userStocks)
            })
            .catch((error) => console.log("fetchTargetUsersStocks error: " , error))
    }

    //TODO: Place in tab container
    function handleStockTabClick(index : number, stockId : number) : void {
        setActiveCategoryTab(switchingTabStatusId)
        setUserCategoryArray(undefined)

        setActiveStockTab(index)
        setCurrentUserStockId(stockId)

        getUserCategoryTabs(stockId)
    }

    function getUserCategoryTabs(userStockIDInput : number) {
        ApiCalls.fetchCategoriesAndModulesUnderUserStock(userStockIDInput)
            .then((response) => {
                const stockTab: OnlyfinUserStockTab = response.data

                setUserCategoryArray(stockTab.categories)
            })
            .catch((error) => console.log("fetchCategoriesAndModulesUnderUserStock error ", error))
    }

    //TODO: Place in tab container
    function handleCategoryTabClick(index : number, categoryId : number) : void {
        setActiveCategoryTab(index)
        setCurrentUserCategoryId(categoryId)
    }

    return(
        <>
            <div className="mx-auto
                max-w-full
                px-4 py-10
                lg:px-10">

                <div className="
                    px-5
                    md:px-10
                    py-10
                    overflow-y-auto
                    rounded-lg
                    bg-white
                    border-2
                    border-blue-900
                    dark:border-0
                    dark:bg-gray-700">

                    <div className={"flex items-center text-center mb-4  justify-center sm:justify-start"}>
                        <div className={"w-16 h-16"}>
                            <Link href={"/users/" + username}>
                                <Avatar username={username}></Avatar>
                            </Link>

                        </div>
                        <Link className={"font-bold text-xl"} href={"/users/" + username}>{username}</Link>
                    </div>

                    <TabsContainer
                        activeStockTab={activeStockTab}
                        userStockArray={userStockArray}
                        userCategoryArray={userCategoryArray}
                        activeCategoryTab={activeCategoryTab}
                        handleStockTabClick={handleStockTabClick}
                        handleCategoryTabClick={handleCategoryTabClick}
                        readOnly={true}

                        initialUserStockId={currentUserStockId}
                    />

                    <DashboardModules
                        userCategoryArray={userCategoryArray}
                        activeCategoryTab={activeCategoryTab}
                        currentUserCategoryId={currentUserCategoryId}
                        readOnly={true}
                    />

                </div>
            </div>
        </>
    )
}