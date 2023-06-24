"use client"
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React, {useState} from "react";

const tempCharts = [
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    },
]

export default function dashboardModuleBoard() {

    const [studioChart, setStudioChart] = useState({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
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

    return (
        <div className="">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-6xl">Dashboard</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {tempCharts.map((tempChart) => (
                        <a key="" href="" className="group">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                <HighchartsReact
                                    containerProps={{style: {height: '100%', weight: '100%'}}}
                                    highcharts={Highcharts}
                                    options={studioChart}
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
