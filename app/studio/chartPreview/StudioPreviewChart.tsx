"use client"

import React, {useState} from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export default function StudioPreviewChart() {

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