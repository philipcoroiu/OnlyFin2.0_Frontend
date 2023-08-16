import ToolbarTable from "@/app/studio/toolbar/toolbarTable/ToolbarTable";
import StartField from "@/app/studio/toolbar/startField/StartField";
import {Dispatch, SetStateAction} from "react";
import {boolean} from "zod";

type Props = {
    handleChartTitleChange(event: any): void,
    handleChartSelectChange(event: any): void,
    handleChartDataChange(newChartData: any): void,
    tableData: DataArray[],
    setTableData: Dispatch<SetStateAction<DataArray[]>>,
    handleYaxisChange(newValue: string): void,
    handleXaxisChange(newValue: string): void
    handleSubmit(): void,
    handleCategoryIdChoice(categoryIdChoice: number): void,
    chartTitle?: string,
    chartType?: string,
    yAxisTitle?: string | undefined,
    xAxisTitle?: string | undefined,
    isEditPage?: boolean,
    handleUpdateModule?: () => void,
    handleDeleteModule?: () => void,
    currentCategoryId?: number
}

export default function Toolbar(props : Props) {
    function handleSubmit() {
        if(props.isEditPage && props.handleUpdateModule) {
            props.handleUpdateModule()
        } else {
            props.handleSubmit()
        }
    }

    function submitButtonIsActive() {
        return props.currentCategoryId !== -1;
    }

    function renderTooltip() {
        if(!submitButtonIsActive()) {
            return (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full  p-2 bg-black text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Stock or category is empty
                </div>
            )
        }
    }

    return (
        <div className="space-y-4 h-max">
            <div className="p-4 rounded dark:bg-gray-700 space-y-2 h-max">
                <StartField
                    handleChartTitleChange={props.handleChartTitleChange}
                    handleChartSelectChange={props.handleChartSelectChange}
                    handleYaxisChange={props.handleYaxisChange}
                    handleXaxisChange={props.handleXaxisChange}
                    handleCategoryIdChoice={props.handleCategoryIdChoice}

                    chartTitle={props.chartTitle}
                    chartType={props.chartType}
                    yAxisTitle={props.yAxisTitle}
                    xAxisTitle={props.xAxisTitle}
                    isEditPage={props.isEditPage}
                />
            </div>

            <div className={"relative group"}>
                <button
                    onClick={handleSubmit}
                    disabled={!submitButtonIsActive()}
                    className={`w-full 
                    text-white 
                    bg-blue-700 
                    hover:bg-blue-800 
                    focus:ring-4 
                    focus:ring-blue-300 
                    font-medium 
                    rounded-lg 
                    text-sm 
                    px-5 
                    py-2.5 
                    dark:bg-blue-600 
                    dark:hover:bg-blue-700 
                    focus:outline-none 
                    dark:focus:ring-blue-800
                    ${submitButtonIsActive() ? '' : 'opacity-50 cursor-not-allowed'}
                    `}>{props.isEditPage ? "Update" : "Submit"}
                </button>

                {renderTooltip()}

            </div>

            {props.isEditPage &&
                <button
                    onClick={props.handleDeleteModule}
                    className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800">Delete
                </button>}
        </div>

    )
}