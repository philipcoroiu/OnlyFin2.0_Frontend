import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import Link from "next/link";
import React from 'react';
import { Layout, Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function DashboardModules(props: {
    userCategoryArray: OnlyfinUserCategoryTab[] | undefined,
    activeCategoryTab: number
}) {

    const layouts: Layout[] = [
        { i: 'a', x: 0, y: 0, w: 1, h: 2 },
        { i: 'b', x: 1, y: 0, w: 3, h: 2 },
        { i: 'c', x: 4, y: 0, w: 1, h: 2 },
    ];

    function renderModules() {
        console.log("props.userCategoryArray: ", props.userCategoryArray)

        if (!props.userCategoryArray[props.activeCategoryTab]) {
            return (
                <p className={""}>Choose or create a category</p>
            )
        }

        else if (props.userCategoryArray[props.activeCategoryTab].modules.length === 0) {
            return(
                <Link href={"/studio"}>
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

        return (
            props.userCategoryArray[props.activeCategoryTab].modules.map((module: any) => (
                    <div key={module.id}
                         data-grid={{x: module.xAxis, y: 0, w: module.width, h: module.height}}
                                className="">

                        <HighchartsReact
                            containerProps={{style: {height: '100%', weight: '100%'}}}
                            highcharts={Highcharts}
                            options={module.content}
                        />
                    </div>
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
        )
    }

    function bruh() {
        if (props.userCategoryArray && props.userCategoryArray[props.activeCategoryTab]) {
            props.userCategoryArray[props.activeCategoryTab].modules.map((module: OnlyfinModule) => {
                console.log(module.height, module.width, module.xAxis, module.yAxis)
            })
        }
    }

    return (
        <div className="">

            <div style={{ marginTop: '50px' }}>
                <ResponsiveGridLayout
                    className="layout"
                    layouts={{ lg: layouts }}
                    breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                    isResizable={true}
                >
                    <div key="a" style={{ backgroundColor: 'lightblue' }}>
                        <span>a</span>
                    </div>
                    <div key="b" style={{ backgroundColor: 'lightgreen' }}>
                        <span>b</span>
                    </div>
                    <div key="c" style={{ backgroundColor: 'salmon' }}>
                        <span>c</span>
                    </div>
                </ResponsiveGridLayout>
            </div>

                {props.userCategoryArray ? renderModules() : renderLoadingAnimation()}


        </div>
    )
}