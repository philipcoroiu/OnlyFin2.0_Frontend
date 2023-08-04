"use client"

import React, {Dispatch, SetStateAction, useEffect} from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

type Props = {
    chartTitle: string,
    chartType: string,
    tableData: DataArray[],
    yAxisTitle: string | undefined,
    xAxisTitle: string | undefined,
    studioChart: OnlyfinHighchartsChart,
    setStudioChart: Dispatch<SetStateAction<OnlyfinHighchartsChart>>
}

export default function StudioPreviewChart(props: Props) {

    if(!props.tableData) {
        return <div>Loading</div>
    }

    useEffect(() => {
        console.log("Chart title has been changed to: ", props.chartTitle)
        handleChartTitleChange(props.chartTitle)
    }, [props.chartTitle]);

    useEffect(() => {
        console.log(props.chartType)
        handleChartTypeChange(props.chartType)
    }, [props.chartType])

    useEffect(() => {
        const xAxisCategories = props.tableData.slice(1).map((row: any) => row[0].value);

        console.log("props.tableData in StudioPreviewChart: ", props.tableData)

        const seriesData = props.tableData[0].slice(1).map((col: any, index: number) => ({
            name: col.value,
            data: props.tableData.slice(1).map((row: any) => parseInt(row[index + 1].value, 10))
        }));

        console.log("SeriesData in studio: ", seriesData)

        props.setStudioChart((prevState: any) => ({
            ...prevState,
            xAxis: {
                categories: xAxisCategories,
                title: {
                    ...prevState.title.text
                }
            },
            series: seriesData
        }));

        console.log("seriesData: ", seriesData)
    }, [props.tableData])

    useEffect(() => {
        handleYaxisTitle(props.yAxisTitle)
    }, [props.yAxisTitle])


    useEffect(() => {
        handleXaxisTitle(props.xAxisTitle)
    }, [props.xAxisTitle])


    function handleChartTitleChange(newChartTitle: string) {

        props.setStudioChart((prevState: any) => {
            return {
                ...prevState,
                title: {
                    ...prevState.title,
                    text: newChartTitle
                }
            }
        })
    }

    function handleChartTypeChange(newChartType: string) {
        props.setStudioChart((prevChart: any) => ({
            ...prevChart,
            chart: {
                ...prevChart.chart,
                type: newChartType,
            },
        }));
    }

    function handleYaxisTitle(newYaxisTitle: string | undefined) {
        props.setStudioChart((prevChart: any) => ({
            ...prevChart,
            yAxis: {
                title: {
                    text: newYaxisTitle
                },
            }
        }))
    }


    function handleXaxisTitle(newXaxisTitle: string | undefined) {
        props.setStudioChart((prevChart: any) => ({
            ...prevChart,
            xAxis: {
                ...prevChart.xAxis,
                title: {
                    text: newXaxisTitle
                },
            }
        }))
    }


    return (
        <div className="w-full
                        overflow-hidden
                        rounded-lg
                        bg-gray-200
                        xl:aspect-h-8
                        xl:aspect-w-7">
            <HighchartsReact
                containerProps={{style: {height: '100%', weight: '100%'}}}
                highcharts={Highcharts}
                options={props.studioChart}
            />
        </div>
    )
}