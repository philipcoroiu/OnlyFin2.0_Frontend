import ToolbarTable from "@/app/studio/toolbar/toolbarTable/ToolbarTable";
import StartField from "@/app/studio/toolbar/startField/StartField";
import {Dispatch, SetStateAction} from "react";

type Props = {
    handleChartTitleChange(event: any): void,
    handleChartSelectChange(event: any): void,
    handleChartDataChange(newChartData: any): void,
    chartData: DataArray[],
    setChartData: Dispatch<SetStateAction<DataArray[]>>,
    handleYaxisChange(newValue: string): void,
    handleXaxisChange(newValue: string): void
    handleSubmit(): void,
    handleCategoryIdChoice(categoryIdChoice: number): void
}

export default function Toolbar(props : Props) {

    return (
        <div>
            <div className="p-4
                rounded
                bg-gray-700">

                <StartField
                    handleChartTitleChange={props.handleChartTitleChange}
                    handleChartSelectChange={props.handleChartSelectChange}
                    handleYaxisChange={props.handleYaxisChange}
                    handleXaxisChange={props.handleXaxisChange}
                    handleCategoryIdChoice={props.handleCategoryIdChoice}
                />
            </div>

            <div className="p-4
                rounded
                bg-gray-700
                my-5
                overflow-auto">

                <ToolbarTable
                    handleChartDataChange={props.handleChartDataChange}
                    chartData={props.chartData}
                    setChartData={props.setChartData}
                />
            </div>

            <button
                    onClick={props.handleSubmit}
                    className="w-full
                    text-white
                    bg-blue-700
                    hover:bg-blue-800
                    focus:ring-4
                    focus:ring-blue-300
                    font-medium rounded-lg
                    text-sm
                    px-5
                    py-2.5
                    mr-2
                    mb-2
                    dark:bg-blue-600
                    dark:hover:bg-blue-700
                    focus:outline-none
                    dark:focus:ring-blue-800">Submit
            </button>

        </div>
    )
}