"use client"

import React, {useState} from "react";
import CategoryTabs from "./CategoryTabs"

const tempTabsList = [
    {
        name: 1,
    },
    {
        name: 2,
    },
    {
        name: 3,
    },
    {
        name: 4,
    },
    {
        name: 5,
    },
]

export default function StockTabs(props : any) {


    return (
    <div>

        {
            // ***********//
            // STOCK TABS //
            // ***********//
        }

        <ul
            className="flex
        flex-wrap
        text-sm
        font-medium
        text-center
        text-gray-500
        dark:text-gray-400">

            {tempTabsList.map((tab: {name:number}, index : number) => (
                <li className="mr-2">
                    <button
                          className={`${props.activeStockTab === index ? "inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active" : "inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"}`}
                          onClick={() => props.handleStockTabClick(index)}
                          aria-current="page">{tab.name}
                    </button>
                </li>
            ))}

            {
                // *******************//
                // EDIT STOCKS BUTTON //
                // *******************//
            }

            <li className="mr-2">
                <a href="#"
                   className="inline-block
                   px-4
                   py-3
                   rounded-lg
                   hover:text-gray-900
                   hover:bg-gray-100
                   dark:hover:bg-gray-800
                   dark:hover:text-white">...</a>
            </li>
        </ul>

        <CategoryTabs
            activeCategoryTab={props.activeCategoryTab}
            handleCategoryTabClick={props.handleCategoryTabClick}
        ></CategoryTabs>

    </div>

)
}