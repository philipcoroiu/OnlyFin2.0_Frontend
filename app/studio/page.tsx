"use client"

import Toolbar from "@/app/studio/toolbar/Toolbar"
import StudioPreviewChart from "@/app/studio/chartPreview/StudioPreviewChart";
import {useState} from "react";

export default function DashboardPage() {

    const [chartTitle, setChartTitle] = useState("Untitled Chart")
    const [chartType, setChartType] = useState("column")
    const [chartData, setChartData] = useState([
        [{ value: 'Billions' }, { value: "Amazon" }, { value: "Apple" }, { value: "Google" }],
        [{ value: '2021' }, { value: 469 }, { value: 378 }, { value: 257 }],
        [{ value: '2022' }, { value: 513 }, { value: 387 }, { value: 282 }],
        [{ value: '2023' }, { value: 524 }, { value: 385 }, { value: 284 }],
    ]);

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
                    />
                </div>

                <div className="flex-1
                mx-2
                bg-gray-700
                rounded
                shadow-lg
                p-4
                h-full
                overflow-auto">

                    <Toolbar
                        handleChartTitleChange={handleChartTitleChange}
                        handleChartSelectChange={handleChartSelectChange}
                        handleChartDataChange={handleChartDataChange}
                        chartData={chartData}
                        setChartData={setChartData}
                    />
                </div>
            </div>

        </div>
    )
}