"use client"
import ToolbarTable from "@/app/studio/toolbar/toolbarTable/ToolbarTable";
import StartField from "@/app/studio/toolbar/startField/StartField";

export default function Toolbar(props : any) {


    return(
        <div>
            <StartField
                handleChartTitleChange={props.handleChartTitleChange}
            />
            <ToolbarTable/>
        </div>
    )
}