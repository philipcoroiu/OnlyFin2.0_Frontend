"use client"
import React, {useState} from "react";
import StockTabs from "./Tabs/StockTabs";
import DashboardModules from "@/app/dashboard/DashbordModules";



export default function dashboardModuleBoard() {

    const [activeStockTab, setActiveStockTab] = useState(0);
    const [activeCategoryTab, setActiveCategoryTab] = useState(0);

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

                <h2 className="text-7xl">Dashboard</h2>

                <div className="px-10
                py-10
                overflow-y-auto
                rounded-lg
                bg-gray-700">

                    <StockTabs
                        activeStockTab={activeStockTab}
                        activeCategoryTab={activeCategoryTab}
                        handleStockTabClick={handleStockTabClick}
                        handleCategoryTabClick={handleCategoryTabClick}
                    ></StockTabs>

                    <DashboardModules></DashboardModules>

                </div>
            </div>
        </div>

    )
}
