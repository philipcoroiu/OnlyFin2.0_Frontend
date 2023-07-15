"use client"
import React, {useEffect, useState} from "react";
import TabsContainer from "../Tabs/TabsContainer";
import DashboardModules from "@/app/dashboard/DashbordModules";
import {ApiCalls} from "@/app/utilities/ApiCalls";



export default function dashboardModuleBoard({params}: { params: { username: string } }) {

    const [activeStockTab, setActiveStockTab] = useState(0);
    const [activeCategoryTab, setActiveCategoryTab] = useState(0);

    useEffect(() => {
        ApiCalls.fetchTargetUsersStocks(params.username)
            .then((response) => console.log(response.data))
            .catch((error) => console.log("fetchTargetUsersStocks error: " , error))
    }, [])

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
                        activeCategoryTab={activeCategoryTab}
                        handleStockTabClick={handleStockTabClick}
                        handleCategoryTabClick={handleCategoryTabClick}
                    ></TabsContainer>

                    <p>{params.username}</p>

                    <DashboardModules></DashboardModules>

                </div>
            </div>
        </div>

    )
}
