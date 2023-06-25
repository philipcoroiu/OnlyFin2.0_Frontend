"use client"

import Toolbar from "@/app/studio/toolbar/Toolbar"
import StudioPreviewChart from "@/app/studio/chartPreview/StudioPreviewChart";

export default function DashboardPage() {

    return(
        <div>
            <div className="h-screen flex justify-center items-center p-4">

                <div className="flex-1 mx-2 bg-gray-700 rounded shadow-lg p-4 h-full overflow-auto">
                    <StudioPreviewChart/>
                </div>

                <div className="flex-1 mx-2 bg-gray-700 rounded shadow-lg p-4 h-full overflow-auto">
                    <Toolbar/>
                </div>
            </div>

        </div>
    )
}