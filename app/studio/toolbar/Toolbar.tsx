"use client"
import ToolbarTable from "@/app/studio/toolbar/toolbarTable/ToolbarTable";
import StartField from "@/app/studio/toolbar/startField/StartField";

export default function Toolbar(props : any) {


    return(
        <div>
            <StartField
                handleChartTitleChange={props.handleChartTitleChange}
                handleChartSelectChange={props.handleChartSelectChange}
                handleYaxisChange={props.handleYaxisChange}
                handleXaxisChange={props.handleXaxisChange}
            />
            <ToolbarTable
                handleChartDataChange={props.handleChartDataChange}
                chartData={props.chartData}
                setChartData={props.setChartData}

            />
        </div>
    )
}