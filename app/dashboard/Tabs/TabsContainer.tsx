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

            <p>Stocks</p>
            <StockTabs
                activeStockTab={props.activeStockTab}
                handleStockTabClick={props.handleStockTabClick}
                userStockArray={props.userStockArray}
                handleStockEditButtonClick={props.handleStockEditButtonClick}
            ></StockTabs>

            <p>Categories</p>
            <CategoryTabs
                activeCategoryTab={props.activeCategoryTab}
                handleCategoryTabClick={props.handleCategoryTabClick}
                userCategoryArray={props.userCategoryArray}
                handleCategoryEditButtonClick={props.handleCategoryEditButtonClick}
            ></CategoryTabs>


        </div>

    )
}