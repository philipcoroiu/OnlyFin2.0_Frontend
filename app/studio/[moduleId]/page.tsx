"use client"

import Toolbar from "@/app/studio/toolbar/Toolbar"
import StudioPreviewChart from "@/app/studio/chartPreview/StudioPreviewChart";
import {useEffect, useState} from "react";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import {useRouter, useSearchParams} from "next/navigation";
import ToolbarTable from "@/app/studio/toolbar/toolbarTable/ToolbarTable";
export default function StudioPage({params}: { params: { moduleId: string } }) {

    const router = useRouter()
    const moduleIdToEdit = parseInt(params.moduleId)

    useEffect(() => {
        ApiCalls.fetchModule(moduleIdToEdit)
            .then((response) => {
                const module = response.data.content

                //Set toolbar
                setChartTitle(module.title.text)
                setChartType(module.chart.type)
                setyAxisTitle(module.yAxis.title.text)
                setxAxisTitle(module.xAxis.title.text)

                //Set studio chart
                setStudioChart(module)

                //Set toolbar table
                let result : DataArray[] = new Array();

                let header = [{ value: 'Billions' }].concat(module.series.map((company : any) => ({ value: company.name })));
                result[0] = header;

                module.xAxis.categories.forEach((year: any, index: number) => {
                    let row = [{ value: year }].concat(module.series.map((category : any) => ({value: category.data[index]})));
                    result.push(row);
                });

                setTableData(result)
            })
    }, [])


    const [currentCategoryId, setCurrentCategoryId] = useState<number>(0)
    const [chartTitle, setChartTitle] = useState<string>("Untitled Chart")
    const [chartType, setChartType] = useState<string>("column")
    const [yAxisTitle, setyAxisTitle] = useState<string | undefined>();
    const [xAxisTitle, setxAxisTitle] = useState<string | undefined>();
    const [tableData, setTableData] = useState<DataArray[]>();

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
        ApiCalls.addModule(currentCategoryId, 3,1,1,1,chartType, studioChart)
            .then(() => router.push('/dashboard'))
    }

    function handleCategoryIdChoice(categoryIdChoice: number) {
        setCurrentCategoryId(categoryIdChoice)
    }

    function handleTableDataChange(newTableData : any) {
        setTableData(newTableData)
    }

    function handleUpdateModule() {
        ApiCalls.updateModuleContent(moduleIdToEdit, chartType, studioChart)
            .then(() => router.push('/dashboard'))
    }

    function handleDeleteModule() {
        ApiCalls.deleteModule(moduleIdToEdit)
            .then(() => router.push('/dashboard'))
    }

    function renderToolbar() {
        if(!tableData) {
            return <div>Loading</div>
        }

        return(
            <div>
                <Toolbar
                    handleChartTitleChange={handleChartTitleChange}
                    handleChartSelectChange={handleChartSelectChange}
                    handleChartDataChange={handleChartDataChange}
                    //chartData={tableData}
                    tableData={tableData}
                    setTableData={handleTableDataChange}
                    handleYaxisChange={handleYaxisTitleChange}
                    handleXaxisChange={handleXaxisTitleChange}
                    handleSubmit={handleSubmit}
                    handleCategoryIdChoice={handleCategoryIdChoice}

                    chartTitle={chartTitle}
                    chartType={chartType}
                    yAxisTitle={yAxisTitle}
                    xAxisTitle={xAxisTitle}
                    isEditPage={true}
                    handleUpdateModule={handleUpdateModule}
                    handleDeleteModule={handleDeleteModule}
                />


            </div>
        )
    }

    function renderStudioPreviewChart() {
        if(!tableData) {
            return <div>Loading</div>
        }

        return (
            <StudioPreviewChart
                chartTitle={chartTitle}
                chartType={chartType}
                tableData={tableData}
                yAxisTitle={yAxisTitle}
                xAxisTitle={xAxisTitle}
                studioChart={studioChart}
                setStudioChart={setStudioChart}
            />
        )
    }

    function renderToolbarTable() {
        if(!tableData) {
            return <div>Loading</div>
        }

        return(
            <ToolbarTable
                handleChartDataChange={handleChartDataChange}
                tableData={tableData}
                setTableData={handleChartDataChange}
            />
        )
    }

    return(
        <div className="h-max p-4 flex flex-col items-center justify-center">
            <div className="flex flex-col md:flex-row gap-4 mb-4 w-full justify-center">
                <div className="xl:w-4/12 w-full bg-white dark:bg-gray-600 border-2 border-blue-900 dark:border-0 rounded shadow-lg p-4 overflow-auto">
                    {renderStudioPreviewChart()}
                </div>
                <div className="xl:w-4/12 w-full bg-white dark:bg-gray-600 border-2 border-blue-900 dark:border-0 rounded shadow-lg p-4 overflow-auto">
                    {renderToolbar()}
                </div>
            </div>
            <div className="xl:w-8/12 w-full rounded bg-white dark:bg-gray-600 border-2 border-blue-900 dark:border-0 overflow-auto p-8 resize">
                {renderToolbarTable()}
            </div>
        </div>
    )
}