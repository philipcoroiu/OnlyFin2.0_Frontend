"use client"

import {useEffect, useState} from "react";
import {ApiCalls} from "@/app/utilities/ApiCalls";

export default function StartField(props : any) {

    const [stockIsSelected, setStockIsSelected] = useState(false);

    const [userStockTabs, setUserStockTabs] = useState<OnlyfinUserStockTab[]>();

    useEffect(() => {
        ApiCalls.fetchDashboardMetadata()
            .then((response) => {
                setUserStockTabs(response.data.userStockTabs)

                //TODO: Delete console.log
                console.log("userStockTabs", response.data.userStockTabs)
            })
    }, [])

    function handleStockSelect(event : any) {
        const selectedStockValue = event.target.value;

        if(selectedStockValue === "stock") {
            setStockIsSelected(false)
        } else {
            setStockIsSelected(true)
        }
    }

    function renderStockList() {
        // TODO: Add loading animation?
        if (!userStockTabs) {
            return <option>Loading...</option>;
        } else {
            return userStockTabs.map((stockTab: OnlyfinUserStockTab) => {
                console.log("StockTabId: ", stockTab.userStockId);
                return <option>{stockTab.userStockId}</option>;
            });
        }
    }


    return (
        <div>
            {
                // ************//
                // CHART TITLE //
                // ************//
            }

            <div className="mb-6">
                <label htmlFor="default-input"
                       className="block
                       mb-2
                       text-sm
                       font-medium
                       text-gray-900
                       dark:text-white">Chart Title</label>

                <input type="text"
                       id="default-input"
                       placeholder="Untitled Chart"
                       maxLength={60}
                       onChange={props.handleChartTitleChange}
                       className="bg-gray-50
                       border
                       border-gray-300
                       text-gray-900
                       text-sm rounded-lg
                       focus:ring-blue-500
                       focus:border-blue-500
                       block
                       w-full
                       p-2.5
                       dark:bg-gray-700
                       dark:border-gray-600
                       dark:placeholder-gray-400
                       dark:text-white
                       dark:focus:ring-blue-500
                       dark:focus:border-blue-500"/>
            </div>

            {
                // ***************//
                // STOCK SELECTOR //
                // ***************//
            }

            <label htmlFor="stocks" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                a stock</label>

            <select id="stocks"
                    onChange={handleStockSelect}
                    defaultValue="stock"
                    className="
                    bg-gray-50
                    border
                    border-gray-300
                    text-gray-900
                    text-sm rounded-lg
                    focus:ring-blue-500
                    focus:border-blue-500
                    block
                    w-full
                    p-2.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    ark:focus:ring-blue-500
                    dark:focus:border-blue-500">

                <option value="stock">Stock</option>
                {renderStockList()}

            </select>
            {
                // ******************//
                // CATEGORY SELECTOR //
                // ******************//
            }

            <label htmlFor="stocks" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                a category</label>

            <select id="stocks"
                    defaultValue="Category"
                    className="
                    bg-gray-50
                    border
                    border-gray-300
                    text-gray-900
                    text-sm rounded-lg
                    focus:ring-blue-500
                    focus:border-blue-500
                    block
                    w-full
                    p-2.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    ark:focus:ring-blue-500
                    dark:focus:border-blue-500"
                    disabled={!stockIsSelected}
            >

                <option value="category">Category</option>
                <option value="bar">Bar</option>
                <option value="column">Column</option>
                <option value="line">Line</option>
            </select>


            {
                // ***************//
                // CHART SELECTOR //
                // ***************//
            }

            <label htmlFor="charts" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                a chart type</label>

            <select id="charts"
                    onChange={props.handleChartSelectChange}
                    defaultValue="default"
                    className="
                    bg-gray-50
                    border
                    border-gray-300
                    text-gray-900
                    text-sm rounded-lg
                    focus:ring-blue-500
                    focus:border-blue-500
                    block
                    w-full
                    p-2.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    ark:focus:ring-blue-500
                    dark:focus:border-blue-500">

                <option value="default">Choose a chart</option>
                <option value="bar">Bar</option>
                <option value="column">Column</option>
                <option value="line">Line</option>
            </select>
        </div>
    )
}