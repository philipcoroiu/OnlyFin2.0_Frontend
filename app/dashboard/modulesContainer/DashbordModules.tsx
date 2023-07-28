import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import Link from "next/link";
import React, {useState} from 'react';
import { Layout, Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import Module from "@/app/dashboard/modulesContainer/Module";
import {ApiCalls} from "@/app/utilities/ApiCalls";

const ResponsiveGridLayout = WidthProvider(Responsive);




export default function DashboardModules(props: {
    userCategoryArray: OnlyfinUserCategoryTab[] | undefined,
    activeCategoryTab: number
}) {

    const [moduleLayout, setModuleLayout] = useState<Layout[]>();

    function renderModules() {
        console.log("props.userCategoryArray: ", props.userCategoryArray)

        if(!props.userCategoryArray) {
            return <div className={"w-20 h-20 bg-red-400"}>{renderLoadingAnimation()}</div>
        }

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
            console.log("modules: ", props.userCategoryArray[props.activeCategoryTab].modules)

           // <Module key={moduleData.id} moduleData = {moduleData} ></Module>
        return (
            props.userCategoryArray[props.activeCategoryTab].modules.map((moduleData: any) => (

                <div
                    key={moduleData.id}
                    data-grid={{x: moduleData.xAxis, y: moduleData.yAxis, w: moduleData.width, h: moduleData.height}}>
                    <Module moduleData = {moduleData} ></Module>
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

    function updateLayout()  {
        if (moduleLayout){
            moduleLayout.map((layoutData: any) => {
                ApiCalls.updateModuleLayout(layoutData.i, layoutData.h, layoutData.w, layoutData.x, layoutData.y)
                    .then(() => console.log("Saved new layout"))
            })
        }
    }

    return (
        <div className="">

            {
                /* Toggle button */
            }

            <button onClick={updateLayout}>Save Layout</button>

            <div className={"mt-4 bg-red-400"}>
                <ResponsiveGridLayout
                    className="layout"
                    cols={{ lg: 8, md: 6, sm: 1, xs: 1, xxs: 1 }}
                    rowHeight={190}
                    breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                    isResizable={true}
                    compactType="vertical"
                    onLayoutChange={(newLayout: Layout[]) => setModuleLayout(newLayout)}
                >
                    {renderModules()}

                </ResponsiveGridLayout>
            </div>

        </div>
    )
}