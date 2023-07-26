"use client"

import React, {useEffect, useState} from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export default function StudioPreviewChart(props : any) {

    //TEMP xAxisCategories TEST –– REMOVE LATER

    // Populates the categories, skips the first row
    //const xAxisCategories = props.chartData.slice(1).map((row: any) => row[0].value);
    //console.log("xAxisCategories: ", xAxisCategories)

    //////////////////////////////
/*
    const seriesData = initialData[0].slice(1).map((col: any, index: number) => ({
        name: col.value,
        data: initialData.slice(1).map((row: any) => parseInt(row[index + 1].value, 10))
    }));
    console.log("seriesData: ", seriesData)

 */


    //////////////////////////////

    useEffect(() => {
        console.log("Chart title has been changed to: ", props.chartTitle)
        handleChartTitleChange(props.chartTitle)
    }, [props.chartTitle]);

    useEffect(() => {
        console.log(props.chartType)
        handleChartTypeChange(props.chartType)
    }, [props.chartType])

    useEffect(() => {
        const xAxisCategories = props.chartData.slice(1).map((row: any) => row[0].value);
        const seriesData = props.chartData[0].slice(1).map((col: any, index: number) => ({
            name: col.value,
            data: props.chartData.slice(1).map((row: any) => parseInt(row[index + 1].value, 10))
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
    },[props.chartData])

    useEffect(() => {
        handleYaxisTitle(props.yAxisTitle)
    }, [props.yAxisTitle])


    useEffect(() => {
        handleXaxisTitle(props.xAxisTitle)
    }, [props.xAxisTitle])



    function handleChartTitleChange(newChartTitle : string) {

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

    function handleChartTypeChange(newChartType : string) {

        props.setStudioChart((prevChart: any) => ({
            ...prevChart,
            chart: {
                ...prevChart.chart,
                type: newChartType,
            },
        }));
    }

    function handleYaxisTitle(newYaxisTitle: string){
        props.setStudioChart((prevChart: any) => ({
            ...prevChart,
            yAxis: {
                title: {
                    text: newYaxisTitle
                },
            }
        }))
    }


    function handleXaxisTitle(newXaxisTitle: string) {
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


    /*
    function handleChartDataChange(newChartData : any) {

        setStudioChart((prevState) => {
            return {
                ...prevState,
                series: [
                    {
                        name: 'Jane',
                        data: newChartData[0], // New data for Jane series
                    },
                    {
                        name: 'John',
                        data: newChartData, // New data for John series
                    },
                ],
            };
        });
    }

     */


    /*
    const [studioChart, setStudioChart] = useState({
        chart: {
            type: props.chartType
        },
        title: {
            text: props.chartTitle
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

     */

    return(
        <div className="flex flex-col justify-center h-3/4 mx-2 rounded p-4">
            <HighchartsReact
                containerProps={{style: {height: '100%', weight: '100%'}}}
                highcharts={Highcharts}
                options={props.studioChart}
            />
        </div>
    )
}