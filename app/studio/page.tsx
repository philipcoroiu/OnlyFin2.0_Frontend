"use client"

import Toolbar from "@/app/studio/toolbar/Toolbar"
import StudioPreviewChart from "@/app/studio/chartPreview/StudioPreviewChart";
import {useState} from "react";
import {ApiCalls} from "@/app/utilities/ApiCalls";

export default function DashboardPage() {

    const [currentCategoryId, setCurrentCategoryId] = useState<number>()
    const [chartTitle, setChartTitle] = useState<string>("Untitled Chart")
    const [chartType, setChartType] = useState<string>("column")
    const [yAxisTitle, setyAxisTitle] = useState<string>();
    const [xAxisTitle, setxAxisTitle] = useState<string>();
    const [chartData, setChartData] = useState<DataArray[]>([
        [{ value: 'Billions' }, { value: "Amazon" }, { value: "Apple" }, { value: "Google" }],
        [{ value: '2021' }, { value: 469 }, { value: 378 }, { value: 257 }],
        [{ value: '2022' }, { value: 513 }, { value: 387 }, { value: 282 }],
        [{ value: '2023' }, { value: 524 }, { value: 385 }, { value: 284 }],
    ]);

    const [studioChart, setStudioChart] = useState({
        chart: {
            type: chartType
        },
        title: {
            text: chartTitle
        },
        xAxis: {
            categories: ["hej", "test"],
            title: {
                text: "hello"
            }
        },
        yAxis: {
            title: {
                text: 'Billions'
            }
        },
        series: [["hej"], [2]]
    });

    function handleChartTitleChange(event : any) {
        setChartTitle(event.target.value)
    }

    function handleChartSelectChange(event : any) {
        setChartType(event.target.value)
    }

    function handleChartDataChange(newChartData : any) {
        setChartData(newChartData)
        console.log("newChartData", newChartData)
    }

    function handleYaxisTitleChange(newValue: string) {
        console.log("Changed Y axis value to: ", newValue)
        setyAxisTitle(newValue)
    }

    function handleXaxisTitleChange(newValue: string) {
        console.log("Changed X axis value to: ", newValue)
        setxAxisTitle(newValue)
    }

    function handleSubmit() {
        const testChart = { chart: {
            type: "column"
        },
        title: {
            text: "test title"
        },
        xAxis: {
            categories: ["hej", "test"],
                title: {
                text: "hello"
            }
        },
        yAxis: {
            title: {
                text: 'Billions'
            }
        },
        series: [[2], [2]]
    }

        ApiCalls.addModule(141, 1,1,1,1,"column", studioChart)
            .then(() => console.log("Submitted to category id 141"))
    }

    function handleCategoryIdChoice(categoryIdChoice: number) {
        console.log("Current category id: ", categoryIdChoice)
        setCurrentCategoryId(categoryIdChoice)
    }

    return(
        <div>
            <div className="h-screen
            flex
            justify-center
            items-center
            p-4">

                <div className="flex-1
                mx-2
                bg-gray-700
                rounded
                shadow-lg
                p-4
                h-full
                ">
                    <StudioPreviewChart
                        chartTitle={chartTitle}
                        chartType={chartType}
                        chartData={chartData}
                        yAxisTitle={yAxisTitle}
                        xAxisTitle={xAxisTitle}
                        studioChart={studioChart}
                        setStudioChart={setStudioChart}
                    />
                </div>

                <div className="flex-1
                mx-2
                rounded
                shadow-lg
                p-4
                h-full">

                    <Toolbar
                        handleChartTitleChange={handleChartTitleChange}
                        handleChartSelectChange={handleChartSelectChange}
                        handleChartDataChange={handleChartDataChange}
                        chartData={chartData}
                        setChartData={setChartData}
                        handleYaxisChange={handleYaxisTitleChange}
                        handleXaxisChange={handleXaxisTitleChange}
                        handleSubmit={handleSubmit}
                        handleCategoryIdChoice={handleCategoryIdChoice}
                    />
                </div>
            </div>

        </div>
    )
}