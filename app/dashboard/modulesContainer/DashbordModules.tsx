import Link from "next/link";
import React, {useState} from 'react';
import { Layout, Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import Module from "@/app/dashboard/modulesContainer/Module";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import ToggleButton from "@/app/dashboard/components/ToggleButton";

type Props = {
    userCategoryArray: OnlyfinUserCategoryTab[] | undefined,
    activeCategoryTab: number,
    currentUserCategoryId: number,
    isProfileDashboard?: boolean
}

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function DashboardModules(props: Props) {

    const [moduleLayout, setModuleLayout] = useState<Layout[]>();

    const [toggleButtonIsActive, setToggleButtonIsActive] = useState(false);

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
            props.userCategoryArray[props.activeCategoryTab].modules.map((moduleData: OnlyfinModule) => (

                <div
                    key={moduleData.id}
                    data-grid={{x: moduleData.xAxis, y: moduleData.yAxis, w: moduleData.width, h: moduleData.height}}>
                    <Module
                        moduleData={moduleData}
                        isProfileDashboard={props.isProfileDashboard}
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

    function updateLayout()  {
        if (moduleLayout){
            /*
            moduleLayout.map((layoutData: any) => {
                ApiCalls.updateModuleLayout(layoutData.i, layoutData.h, layoutData.w, layoutData.x, layoutData.y)
                    .then(() => console.log("Saved new layout"))
            })
             */

            //ApiCalls.updateModuleLayoutBatch(props.currentUserCategoryId, moduleLayout)

            if (moduleLayout && props.userCategoryArray && props.userCategoryArray[props.activeCategoryTab]) {
                let moduleLayoutDTOS: ModuleLayoutUpdateBatchDTO[] = []

                moduleLayout.map((currentLayout: Layout) => {
                    const currentLayoutDTO: ModuleLayoutUpdateBatchDTO = {
                        moduleId: Number(currentLayout.i),
                        height: currentLayout.h,
                        width: currentLayout.w,
                        xAxis: currentLayout.x,
                        yAxis: currentLayout.y
                    }

                    moduleLayoutDTOS.push(currentLayoutDTO)
                })

                ApiCalls.updateModuleLayoutBatch(props.userCategoryArray[props.activeCategoryTab].userCategoryId, moduleLayoutDTOS)
                    .then(response => {
                        console.log("[DashboardModules.tsx]: layout batch update commenced with great success")
                    })
                    .catch(error => {
                        console.log("[DashboardModules.tsx]: layout batch update failed: " + error)
                    })

            }

            console.log("moduleLayout: ", moduleLayout)
        }
    }

    function handleToggleButtonClick() {
        if(toggleButtonIsActive) {
            updateLayout()
        }

        setToggleButtonIsActive((prevState) => !prevState)
    }

    return (
        <div className="">

            {!props.isProfileDashboard &&
                <ToggleButton
                    handleToggleButtonClick={handleToggleButtonClick}
                />}

            <div className={"mt-4"}>
                <ResponsiveGridLayout
                    className="layout"
                    cols={{ lg: 1, md: 1, sm: 1, xs: 1, xxs: 1 }}
                    rowHeight={190}
                    breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                    isResizable={toggleButtonIsActive}
                    isDraggable={toggleButtonIsActive}
                    compactType="vertical"
                    onLayoutChange={(newLayout: Layout[]) => setModuleLayout(newLayout)}
                >
                    {renderModules()}

                </ResponsiveGridLayout>
            </div>

        </div>
    )
}