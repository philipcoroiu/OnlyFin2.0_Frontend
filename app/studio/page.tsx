"use client"

import Toolbar from "@/app/studio/toolbar/Toolbar"
import StudioPreviewChart from "@/app/studio/chartPreview/StudioPreviewChart";
import {useState} from "react";

export default function DashboardPage() {

    const [chartTitle, setChartTitle] = useState("Chart Title")
    const [chartType, setChartType] = useState("column")

    function handleChartTitleChange(event : React.ChangeEvent<HTMLInputElement>) {
        setChartTitle(event.target.value)
    }

    function handleChartSelectChange(event : any) {
        setChartType(event.target.value)
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
                overflow-auto">
                    <StudioPreviewChart
                        chartTitle={chartTitle}
                        chartType={chartType}
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
                    />
                </div>
            </div>

        </div>
    )
}