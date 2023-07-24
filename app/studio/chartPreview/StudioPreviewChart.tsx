"use client"

import React, {useEffect, useState} from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

const initialData: any = [
    [{ value: 'Year' }, { value: "Mike" }, { value: "John" }, { value: "Anna" }],
    [{ value: '2020' }, { value: 2 }, { value: 3 }, { value: 2 }],
    [{ value: '2021' }, { value: 2 }, { value: 3 }, { value: 2 }],
    [{ value: '2022' }, { value: 3 }, { value: 2 }, { value: 3 }],
];

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

        setStudioChart(prevState => ({
            ...prevState,
            xAxis: {
                categories: xAxisCategories
            },
            series: seriesData
        }));

        console.log("seriesData: ", seriesData)
    },[props.chartData])

    function handleChartTitleChange(newChartTitle : string) {

        setStudioChart(prevState => {
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

        setStudioChart((prevChart) => ({
            ...prevChart,
            chart: {
                ...prevChart.chart,
                type: newChartType,
            },
        }));
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


    const [studioChart, setStudioChart] = useState({
        chart: {
            type: props.chartType
        },
        title: {
            text: props.chartTitle
        },
        xAxis: {
            categories: ["hej", "test"]
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [["hej"], [2]]
    });

    return(
        <div className="rounded">
            <HighchartsReact
                containerProps={{style: {height: '100%', weight: '100%'}}}
                highcharts={Highcharts}
                options={studioChart}
            />
        </div>
    )
}