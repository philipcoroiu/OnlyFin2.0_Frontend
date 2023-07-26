"use client"
import ToolbarTable from "@/app/studio/toolbar/toolbarTable/ToolbarTable";
import StartField from "@/app/studio/toolbar/startField/StartField";

export default function Toolbar(props : any) {


    return(
        <div>
            <div className="p-4
                rounded
                bg-gray-700">

                <StartField
                    handleChartTitleChange={props.handleChartTitleChange}
                    handleChartSelectChange={props.handleChartSelectChange}
                    handleYaxisChange={props.handleYaxisChange}
                    handleXaxisChange={props.handleXaxisChange}
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
        </div>
    )
}