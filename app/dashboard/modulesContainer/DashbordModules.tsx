import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import Link from "next/link";
import {Responsive, WidthProvider} from "react-grid-layout";

export default function DashboardModules(props: {
    userCategoryArray: OnlyfinUserCategoryTab[] | undefined,
    activeCategoryTab: number
}) {

    const ResponsiveGridLayout = WidthProvider(Responsive);

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
                    <div key={module.id} className="group
                                aspect-h-1
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

    return (
        <div className="grid
                    grid-cols-1
                    gap-x-6
                    gap-y-5
                    sm:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-3
                    xl:gap-x-5">

            <ResponsiveGridLayout
                className="layout"
                cols={{ lg: 8, md: 6, sm: 1, xs: 1, xxs: 1 }}
                rowHeight={190}
                isResizable={true}
                compactType="vertical"
                isBounded={true}
                isDraggable={true}
                style={{margin: "15px"}}
            >
                {props.userCategoryArray ? renderModules() : renderLoadingAnimation()}
            </ResponsiveGridLayout>

        </div>
    )
}