import Link from "next/link";
import React, {useEffect, useState} from 'react';
import { Layout, Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import Module from "@/app/dashboard/modulesContainer/Module";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import ToggleButton from "@/app/dashboard/components/ToggleButton";
import {boolean} from "zod";

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
    const [shouldRenderPlaceholderModule, setShouldRenderPlaceholderModule] = useState(true);

    const [userHasCategory, setUserHasCategory] = useState(false)
    const [categoryHasModule, setCategoryHasModule] = useState(false)


    useEffect(() => {
        const hasUserCategoryArray = Boolean(props.userCategoryArray);
        const hasActiveCategory = hasUserCategoryArray && Boolean(props.userCategoryArray?.[props.activeCategoryTab]);
        const currentCategoryHasModules = hasActiveCategory && Boolean(props.userCategoryArray?.[props.activeCategoryTab].modules?.length);

        setUserHasCategory(hasActiveCategory)
        setCategoryHasModule(currentCategoryHasModules)

        console.log("hasUserCategoryArray: ", hasUserCategoryArray)
        console.log("hasActiveCategory: ", hasActiveCategory)
        console.log("currentCategoryHasModules: ", currentCategoryHasModules)

    }, [props.userCategoryArray, props.activeCategoryTab])



    function renderDashboardContent() {

        if (userHasCategory && !categoryHasModule) {
            return renderPlaceholderModule()
        }

        if(categoryHasModule) {
            return renderResponsiveGridLayout()
        }

    }

    function renderResponsiveGridLayout() {
            return (
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
            )
    }

    function renderModules() {

        const modulesAreAvailable = Boolean(props.userCategoryArray?.[props.activeCategoryTab]?.modules)

        if(props.userCategoryArray && modulesAreAvailable) {
            return props.userCategoryArray[props.activeCategoryTab].modules.map((moduleData: OnlyfinModule) => (
                    <div
                        key={moduleData.id}
                        data-grid={{x: moduleData.xAxis, y: moduleData.yAxis, w: moduleData.width, h: moduleData.height}}>
                        <Module
                            moduleData={moduleData}
                            isProfileDashboard={props.isProfileDashboard}
                        />
                    </div>
                ))
        }

        /*
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
         */
    }

    function renderPlaceholderModule() {
        return(
            <Link href={"/studio"}>
                <button className="w-full py-20 text-gray-800 bg-white border-4 border-dashed border-blue-400 hover:bg-blue-50  transition-all duration-300 rounded-lg">
                    Create your first graph here
                </button>
            </Link>

        )
    }

    function updateLayout()  {
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
                {renderDashboardContent()}
            </div>
        </div>
    )
}