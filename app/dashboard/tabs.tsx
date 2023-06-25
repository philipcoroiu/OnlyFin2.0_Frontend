"use client"

import React, {useState} from "react";
import Link from "next/link";

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

export default function Tabs(props : any) {

    // ${props.activeStockTab === index ? "" : ""}

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

            {tempTabsList.map((tab, index) => (
                <li className="mr-2">

                    <Link href={`dashboard/${tab.name}`}
                          className={`${props.activeStockTab === index ? "inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active" : "inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"}`}
                          aria-current="page">{tab.name}
                    </Link>
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

        {
            // **************//
            // CATEGORY TABS //
            // **************//
        }

        <div className="my-5">
            <ul
                className="flex
            flex-wrap
            text-sm
            font-medium
            text-center
            text-gray-500
            dark:text-gray-400">

                <li className="mr-2">
                    <a className="inline-block
                    px-4
                    py-3
                    text-white
                    bg-blue-600
                    rounded-lg
                    active"

                       aria-current="page">Tab 1</a>
                </li>
                <li className="mr-2">
                    <a href="#"
                       className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Tab
                        2</a>
                </li>
                <li className="mr-2">
                    <a href="#"
                       className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Tab
                        3</a>
                </li>

                {
                    // ***********************//
                    // EDIT CATEGORIES BUTTON //
                    // ***********************//
                }

                <li className="mr-2">
                    <a href="#"
                       className="inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">...</a>
                </li>
            </ul>
        </div>
    </div>

)
}