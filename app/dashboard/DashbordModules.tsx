"use client"
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import React, {useState} from "react";
import Link from "next/link";

/////// TEMP ////////
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
/////////////////////

export default function DashboardModules(props : any) {

    /////// TEMP ////////
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
    /////////////////////

    function renderModules() {
        if(props.userCategoryArray[props.activeCategoryTab].modules.length === 0) {
            return(
                <Link href="/studio">
                    <button
                        className="aspect-h-1
                                    aspect-w-1
                                    w-full
                                    overflow-hidden
                                    rounded-lg
                                    bg-gray-600
                                    xl:aspect-h-8
                                    xl:aspect-w-7">
                        Create your first graph here
                    </button>
                </Link>
            )
        }

        return(
            props.userCategoryArray[props.activeCategoryTab].modules.map((module : any, index:number) => (
                <a key={index} className="group">

                    <div
                        className="aspect-h-1
                                aspect-w-1
                                w-full
                                overflow-hidden
                                rounded-lg
                                bg-gray-200
                                xl:aspect-h-8
                                xl:aspect-w-7">

                        <HighchartsReact
                            containerProps={{style: {height: '100%', weight: '100%'}}}
                            highcharts={Highcharts}
                            options={module.content}
                        />
                    </div>
                </a>
            ))
        )
    }

    function renderLoadingAnimation() {
        return (
            <>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 animate-pulse"></div>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 animate-pulse"></div>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7 animate-pulse"></div>
            </>
        );
    }



    return(
        <div
            className="grid
                    grid-cols-1
                    gap-x-6
                    gap-y-5
                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-3
                    xl:gap-x-5">

            {props.userCategoryArray ? renderModules() : renderLoadingAnimation()}

        </div>
    )
}