"use client"

import {useEffect, useState} from "react";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import {useRouter} from "next/navigation";

type Props = {
    handleChartTitleChange(event: any): void,
    handleChartSelectChange(event: any): void,
    handleYaxisChange(newValue: string): void,
    handleXaxisChange(newValue: string): void,
    handleCategoryIdChoice(categoryIdChoice: number): void,
    chartTitle: string | undefined,
    chartType: string | undefined,
    yAxisTitle: string | undefined,
    xAxisTitle: string | undefined,
    isEditPage?: boolean | undefined
}

export default function StartField(props: Props) {
    const router = useRouter()

    const [selectedStockIndex, setSelectedStockIndex] = useState<number>(0);

    const [userStockTabs, setUserStockTabs] = useState<OnlyfinUserStockTab[]>();

    const [userHasStocks, setUserHasStocks] = useState(false)

    useEffect(() => {
        ApiCalls.fetchDashboardMetadata()
            .then((response) => {
                const firstCategoryId = response.data?.userStockTabs?.[0]?.categories?.[0]?.userCategoryId ?? -1;

                if(response.data?.userStockTabs.length > 0) {
                    setUserHasStocks(true)
                }

                setUserStockTabs(response.data.userStockTabs)
                props.handleCategoryIdChoice(firstCategoryId)

            })
            .catch(error => {
                console.log("[studio/toolbar/startField.tsx]: " + error)

                if (error.response?.status === 401) {
                    router.push("/login?redirect=studio")
                }
            })
    }, [])

    function handleStockSelect(event: any) {
        const selectedStockIndex = event.target.selectedIndex;
        setSelectedStockIndex(selectedStockIndex)

        const currentStockHasCategories : boolean =
            (userStockTabs?.[selectedStockIndex]?.categories?.length || 0) > 0;

        if(userStockTabs && currentStockHasCategories) {
            const firstCategoryId: number = userStockTabs[selectedStockIndex].categories[0].userCategoryId;
            props.handleCategoryIdChoice(firstCategoryId)
        } else {
            props.handleCategoryIdChoice(-1)
        }
    }

    function renderStockList() {
        // TODO: Add loading animation?
        if (!userStockTabs) {
            console.log("userStockTabs xxxx: ", userStockTabs)
            return <option>Loading...</option>;
        } else {
            return userStockTabs.map((stockTab: OnlyfinUserStockTab) => {
                return (
                    <option
                        value={stockTab.userStockId}
                        key={stockTab.userStockId}
                >{stockTab.stock.name}</option>);
            });
        }
    }

    function renderCategoryList() {
        if(!userStockTabs) {
            return <option>Loading...</option>
        } else if (userHasStocks) {
            return userStockTabs[selectedStockIndex].categories.map((category: OnlyfinUserCategoryTab) => {
                return (<option
                    key={category.userCategoryId}
                    value={category.userCategoryId}
                >
                    {category.categoryName}
                </option>)
            })
        }
    }

    function renderStockSelector() {
        return(
            <>
                <label htmlFor="stocks"
                       className="block
                   mb-2
                   text-sm
                   font-medium
                   text-gray-900
                   dark:text-white">Select a stock</label>

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

                    {renderStockList()}

                </select>
            </>
        )
    }

    function renderCategorySelector() {
        return(
            <>
                <label htmlFor="stocks" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                    a category</label>

                <select id="categories"
                        onChange={(event) => {
                            const selectedValue = event.target.value;
                            props.handleCategoryIdChoice(Number(selectedValue))
                        }}
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
                >

                    {renderCategoryList()}

                </select>
            </>
        )
    }

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <label htmlFor="chartTitle" className="block text-sm font-medium text-gray-900 dark:text-white">Chart Title</label>
                <input type="text"
                       id="chartTitle"
                       placeholder={props.chartTitle && props.chartTitle.length > 0 ? props.chartTitle : "Untitled Chart"}
                       maxLength={60}
                       onChange={props.handleChartTitleChange}
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>

            {!props.isEditPage && (
                <>
                    {renderStockSelector()}
                    {renderCategorySelector()}
                </>
            )}

            <div className="space-y-2">
                <label htmlFor="charts" className="block text-sm font-medium text-gray-900 dark:text-white">Select a chart type</label>
                <select id="charts" onChange={props.handleChartSelectChange} defaultValue="default"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="default">Choose a chart</option>
                    <option value="bar">Bar</option>
                    <option value="column">Column</option>
                    <option value="line">Line</option>
                    <option value="area">Area</option>
                    <option value="areaspline">Area spline</option>
                    <option value="spline">Spline</option>
                    <option value="scatter">Scatter</option>
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="yAxisTitle" className="block text-sm font-medium text-gray-900 dark:text-white">Y axis title</label>
                <input type="text"
                       id="yAxisTitle"
                       placeholder={props.yAxisTitle && props.yAxisTitle.length > 0 ? props.yAxisTitle : "Y axis"}
                       maxLength={60}
                       onChange={(event) => props.handleYaxisChange(event.target.value)}
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>

            <div className="space-y-2">
                <label htmlFor="xAxisTitle" className="block text-sm font-medium text-gray-900 dark:text-white">X axis title</label>
                <input type="text"
                       id="xAxisTitle"
                       placeholder={props.xAxisTitle && props.xAxisTitle.length > 0 ? props.xAxisTitle : "X axis"}
                       maxLength={60}
                       onChange={(event) => props.handleXaxisChange(event.target.value)}
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
        </div>

    )
}