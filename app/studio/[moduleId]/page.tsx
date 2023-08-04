"use client"

import Toolbar from "@/app/studio/toolbar/Toolbar"
import StudioPreviewChart from "@/app/studio/chartPreview/StudioPreviewChart";
import {useEffect, useState} from "react";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import {useRouter, useSearchParams} from "next/navigation";
export default function StudioPage({params}: { params: { moduleId: string } }) {

    const router = useRouter()
    const moduleIdToEdit = parseInt(params.moduleId)

    useEffect(() => {
        ApiCalls.fetchModule(moduleIdToEdit)
            .then((response) => {
                const module = response.data.content
                console.log("module: ", module)

                //Set toolbar
                setChartTitle(module.title.text)
                setChartType(module.chart.type)
                setyAxisTitle(module.yAxis.title.text)
                setxAxisTitle(module.xAxis.title.text)

                console.log("xxxxx chart info xxxxxx")
                console.log("chart title: ", module.title.text)
                console.log("chart type: ", module.chart.type)
                console.log("y axis title: ", module.yAxis.title.text)
                console.log("x axis title: ", module.xAxis.title.text)
                console.log("xxxxxxxxxxxxxxxxxxxxxxx")

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

                console.log("Result: ", result)
                console.log("TableData", tableData)


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

        ApiCalls.addModule(currentCategoryId, 3,1,1,1,chartType, studioChart)
            .then(() => console.log("Submitted to category id 141"))
            .finally(() => {
                router.push('/dashboard')
            })
    }

    function handleCategoryIdChoice(categoryIdChoice: number) {
        console.log("Current category id: ", categoryIdChoice)
        setCurrentCategoryId(categoryIdChoice)
    }

    function handleTableDataChange(newTableData : any) {
        setTableData(newTableData)
    }

    function renderToolbar() {
        if(!tableData) {
            return <div>Loading</div>
        }

        return(
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
            />
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
                rounded-lg
                shadow-lg
                p-4
                h-full
                ">
                    {renderStudioPreviewChart()}

                </div>

                <div className="flex-1
                mx-2
                rounded
                shadow-lg
                p-4
                h-full">

                    {renderToolbar()}
                </div>
            </div>

        </div>
    )
}