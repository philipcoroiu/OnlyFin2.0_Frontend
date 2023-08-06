"use client"

import Toolbar from "@/app/studio/toolbar/Toolbar"
import StudioPreviewChart from "@/app/studio/chartPreview/StudioPreviewChart";
import {useState} from "react";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import {useRouter} from "next/navigation";
import ToolbarTable from "@/app/studio/toolbar/toolbarTable/ToolbarTable";
export default function StudioPage() {

    const router = useRouter()

    const [currentCategoryId, setCurrentCategoryId] = useState<number>(0)
    const [chartTitle, setChartTitle] = useState<string>("Untitled Chart")
    const [chartType, setChartType] = useState<string>("column")
    const [yAxisTitle, setyAxisTitle] = useState<string | undefined>();
    const [xAxisTitle, setxAxisTitle] = useState<string | undefined>();
    const [tableData, setTableData] = useState<DataArray[]>([
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
        setTableData(newChartData)
    }

    function handleYaxisTitleChange(newValue: string) {
        setyAxisTitle(newValue)
    }

    function handleXaxisTitleChange(newValue: string) {
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

        ApiCalls.addModule(currentCategoryId, 3,1,1,1,chartType, studioChart)
            .finally(() => {
                router.push('/dashboard')
            })
    }

    function handleCategoryIdChoice(categoryIdChoice: number) {
        setCurrentCategoryId(categoryIdChoice)
    }

    function handleTableDataChange(newTableData : any) {
        setTableData(newTableData)
    }

    return(
        <div className="h-max p-4 flex flex-col items-center justify-center">
            <div className="flex gap-4 mb-4 w-full justify-center">
                <div className="w-1/4 bg-gray-600 rounded-lg shadow-lg p-4 overflow-auto">
                    <StudioPreviewChart
                        chartTitle={chartTitle}
                        chartType={chartType}
                        tableData={tableData}
                        yAxisTitle={yAxisTitle}
                        xAxisTitle={xAxisTitle}
                        studioChart={studioChart}
                        setStudioChart={setStudioChart}
                    />
                </div>
                <div className="w-1/4 bg-gray-600 rounded shadow-lg p-4 overflow-auto">
                    <Toolbar
                        handleChartTitleChange={handleChartTitleChange}
                        handleChartSelectChange={handleChartSelectChange}
                        handleChartDataChange={handleChartDataChange}
                        tableData={tableData}
                        setTableData={handleTableDataChange}
                        handleYaxisChange={handleYaxisTitleChange}
                        handleXaxisChange={handleXaxisTitleChange}
                        handleSubmit={handleSubmit}
                        handleCategoryIdChoice={handleCategoryIdChoice}
                    />
                </div>
            </div>
            <div className="w-1/2 rounded bg-gray-700 my-5 overflow-auto p-4 resize">
                <ToolbarTable
                    handleChartDataChange={handleChartDataChange}
                    tableData={tableData}
                    setChartData={setTableData}
                />
            </div>
        </div>



    )
}