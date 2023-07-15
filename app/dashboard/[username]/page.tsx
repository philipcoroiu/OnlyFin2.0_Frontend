"use client"
import React, {useEffect, useState} from "react";
import TabsContainer from "../Tabs/TabsContainer";
import DashboardModules from "@/app/dashboard/DashbordModules";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import Link from "next/link";



export default function dashboardModuleBoard({params}: { params: { username: string } }) {

    const [activeStockTab, setActiveStockTab] = useState(0);
    const [activeCategoryTab, setActiveCategoryTab] = useState(0);

    const [userStockArray , setUserStockArray] = useState();
    const [userCategoryArray, setUserCategoryArray] = useState();

    useEffect(() => {
        ApiCalls.fetchTargetUsersStocks(params.username)
            .then((response) => {
                console.log("userStockArray: ", response.data)
                setUserStockArray(response.data)
                getUserCategoryTabs(response.data[0].id)
            })
            .catch((error) => console.log("fetchTargetUsersStocks error: " , error))
    }, [])

    function getUserCategoryTabs(userStockID : number) {
        ApiCalls.fetchCategoriesAndModulesUnderUserStock(userStockID)
            .then((response) => {
                setUserCategoryArray(response.data.categories)
                console.log(response.data.categories)
            })
            .catch((error) => console.log("fetchCategoriesAndModulesUnderUserStock error ", error))
    }

    function handleStockTabClick(index : number) : void {
        setActiveStockTab(index)
        setActiveCategoryTab(0)
    }

    function handleCategoryTabClick(index : number) : void {
        setActiveCategoryTab(index)
    }

    return (
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
                    ></TabsContainer>

                    <Link href={"/users/" + params.username}>{params.username}</Link>

                    <DashboardModules></DashboardModules>

                </div>
            </div>
        </div>

    )
}
