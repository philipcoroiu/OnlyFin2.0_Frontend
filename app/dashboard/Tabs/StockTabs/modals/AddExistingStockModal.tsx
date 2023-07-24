"use client"

import {useEffect, useState} from "react";
import {ApiCalls} from "@/app/utilities/ApiCalls";

export default function AddExistingStockModal(props: {
    stockEditButtonIsActive: boolean,
    handleExitButtonClick(): void,
    handleAddExistingStock(selectedStockId: number): void
}) {

    const [searchPhrase, setSearchPhrase] = useState<string>("");

    const [listOfAllStocks, setListOfAllStocks] = useState<OnlyfinStock[]>();

    useEffect(() => {
        ApiCalls.findStocksByName(searchPhrase)
            .then((response) => {
                setListOfAllStocks(response.data)

                //TODO: Delete console.log
                console.log("Result of search: ", response.data)
            })
    }, [searchPhrase])

    function handleInputChange(searchInput: string) {
        setSearchPhrase(searchInput)
    }

    function renderListOfAllStocks() {
        if (!listOfAllStocks) {

            //TODO: Add loading animation
            return (
                <p>Loading...</p>
            )
        }

        return (
            listOfAllStocks.map((stock: OnlyfinStock) => (
                <li key={stock.id}>
                    <button
                        onClick={() => props.handleAddExistingStock(stock.id)}
                        className="flex
                        w-full
                        items-center
                        px-7
                        py-2
                        hover:bg-gray-100
                        dark:hover:bg-gray-600
                        dark:hover:text-white"
                    >
                        {stock.name} ({stock.ticker})
                    </button>
                </li>
            ))
        )
    }

    return (
        <>
            {/* !--Main Modal --! */}
            <div id="crypto-modal" aria-hidden="false"
                 className=
                     {`fixed
                         top-0
                         left-0
                         right-0
                         z-50
                         w-full
                         p-4
                         overflow-y-auto
                         md:inset-0
                         max-h-full
                         flex
                         items-center
                         justify-center
                         h-screen
                         bg-black
                         bg-opacity-50
                         ${props.stockEditButtonIsActive ? "" : "hidden"}`}>

                <div className="relative w-full max-w-md max-h-full">

                    {/* Modal Content */}

                    <div className="relative
                                    bg-white
                                    rounded-lg
                                    shadow
                                    dark:bg-gray-700">

                        <button type="button"
                                className="absolute
                                            top-3
                                            right-2.5
                                            text-gray-400
                                            bg-transparent
                                            hover:bg-gray-200
                                            hover:text-gray-900
                                            rounded-lg
                                            text-sm
                                            w-8
                                            h-8
                                            ml-auto
                                            inline-flex
                                            justify-center
                                            items-center
                                            dark:hover:bg-gray-600
                                            dark:hover:text-white"
                                data-modal-hide="crypto-modal"
                                onClick={props.handleExitButtonClick}>

                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>

                        {/* Modal Header */}

                        <div className="px-6
                                        py-4
                                        border-b
                                        rounded-t
                                        dark:border-gray-600">

                            <h3 className="text-base
                                            font-semibold
                                            text-gray-900
                                            lg:text-xl
                                            dark:text-white">

                                Choose a stock
                            </h3>
                        </div>

                        {/* Modal Body */}

                        <ul className="h-100 py-2 overflow-y-auto text-gray-700 dark:text-gray-200 max-h-72"
                            aria-labelledby="dropdownUsersButton">

                            {renderListOfAllStocks()}

                        </ul>

                        <div className="p-6 border-t border-gray-600">
                            <label htmlFor="default-search"
                                   className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                <div
                                    className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                              strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="default-search"
                                       onChange={(event) => handleInputChange(event.target.value)}
                                       className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="Search stocks" required/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}