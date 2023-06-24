"use client"
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React, {useState} from "react";
import Tabs from "./tabs";

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
    {
        id: 5,
    },
    {
        id: 6,
    },
    {
        id: 7,
    },
    {
        id: 8,
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

            <div className="mx-auto mx-20 max-w-full px-4 py-16 sm:px-12 sm:py-20 lg:px-0">
                <h2 className="text-7xl">Dashboard</h2>

                <div className="px-10 py-10 overflow-y-auto rounded-lg bg-gray-700">
                    <Tabs></Tabs>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-5">
                        {tempCharts.map((tempChart) => (
                            <a key="" className="group">
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
        </div>

    )
}
