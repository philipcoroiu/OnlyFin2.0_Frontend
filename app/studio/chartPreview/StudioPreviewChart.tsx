"use client"

import React, {useEffect, useState} from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export default function StudioPreviewChart(props : any) {

    useEffect(() => {
        console.log("Chart title has been changed to: ", props.chartTitle)
        handleChartTitleChange(props.chartTitle)
    }, [props.chartTitle]);

    useEffect(() => {
        console.log(props.chartType)
        handleChartTypeChange(props.chartType)
    }, [props.chartType])

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


    const [studioChart, setStudioChart] = useState({
        chart: {
            type: props.chartType
        },
        title: {
            text: props.chartTitle
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
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