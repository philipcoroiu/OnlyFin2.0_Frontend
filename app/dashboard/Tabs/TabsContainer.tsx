"use client"

import React, {useState} from "react";
import CategoryTabs from "./CategoryTabs/CategoryTabs"
import StockTabs from "./StockTabs/StockTabs"


export default function TabsContainer(props : any) {

    return (
        <div>

            {
                // ***********//
                // STOCK TABS //
                // ***********//
            }


            <StockTabs
                activeStockTab={props.activeStockTab}
                handleStockTabClick={props.handleStockTabClick}
                userStockArray={props.userStockArray}
            ></StockTabs>

            <CategoryTabs
                activeCategoryTab={props.activeCategoryTab}
                handleCategoryTabClick={props.handleCategoryTabClick}
            ></CategoryTabs>


        </div>

    )
}