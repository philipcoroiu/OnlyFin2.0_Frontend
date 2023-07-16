"use client"

import React, {useState} from "react";
import CategoryDropdownMenu from "@/app/dashboard/Tabs/CategoryTabs/CategoryDropdownMenu";
import {render} from "react-dom";

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
]

export default function StockTabs(props : any) {

    const [dropdownMenuIsActive, setDropdownMenuIsActive] = useState(false);

    function handleEditButtonClick() {
        setDropdownMenuIsActive(prevState => !prevState)
    }

    function renderCategoryTabs() {
        return(
            props.userCategoryArray.map((category:OnlyfinUserCategoryTab, index : number) => (
                <li className="mr-2">
                    <button
                        className={`${props.activeCategoryTab === index ? "inline-block px-4 py-3 text-white bg-blue-600 rounded-lg active" : "inline-block px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"}`}
                        onClick={() => props.handleCategoryTabClick(index)}
                        aria-current="page">{category.userCategoryId}
                    </button>
                </li>
            ))
        )
    }

    function renderLoadingTabs() {
        return(
            <li className="mr-2">
                <div className="inline-flex space-x-2">
                    <button className="px-4 py-3 text-white bg-gray-600 rounded-lg active animate-pulse" aria-current="page">...</button>
                    <button className="px-4 py-3 text-white bg-gray-600 rounded-lg active animate-pulse" aria-current="page">...</button>
                    <button className="px-4 py-3 text-white bg-gray-600 rounded-lg active animate-pulse" aria-current="page">...</button>
                </div>
            </li>
        )
    }

    return (
        <div>

            {
                // **************//
                // CATEGORY TABS //
                // **************//
            }

            <ul
                className="flex
                flex-wrap
                text-sm
                font-medium
                text-center
                text-gray-500
                dark:text-gray-400">

                {props.userCategoryArray ? renderCategoryTabs() : renderLoadingTabs()}

                {
                    // ***********************//
                    // EDIT CATEGORIES BUTTON //
                    // ***********************//
                }

                <li className="mr-2">
                    <button
                        id="dropdownMenuIconHorizontalButton"
                        data-dropdown-toggle="dropdownDotsHorizontal"
                        type="button"
                        onClick={handleEditButtonClick}
                        className="inline-flex
                    items-center
                    p-2
                    text-sm
                    font-medium
                    text-center
                    text-gray-900
                    bg-white
                    rounded-lg
                    hover:bg-gray-100
                    focus:ring-4
                    focus:outline-none
                    dark:text-white
                    focus:ring-gray-50
                    dark:bg-gray-800
                    dark:hover:bg-gray-700
                    dark:focus:ring-gray-600"
                    >

                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        </svg>

                    </button>
                    <div className="z-10">

                        <CategoryDropdownMenu
                            dropdownMenuIsActive={dropdownMenuIsActive}
                        ></CategoryDropdownMenu>

                    </div>
                </li>
            </ul>

        </div>

    )
}