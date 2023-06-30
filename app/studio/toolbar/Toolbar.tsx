"use client"
import ToolbarTable from "@/app/studio/toolbar/toolbarTable/ToolbarTable";
import StartField from "@/app/studio/toolbar/startField/StartField";

export default function Toolbar() {
    return(
        <div>
            <StartField/>
            <ToolbarTable/>
        </div>
    )
}