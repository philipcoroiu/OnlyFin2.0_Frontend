"use client"

export default function StartField(props : any) {

    return (
        <div>
            {
                // ************//
                // CHART TITLE //
                // ************//
            }

            <div className="mb-6">
                <label htmlFor="default-input"
                       className="block
                       mb-2
                       text-sm
                       font-medium
                       text-gray-900
                       dark:text-white">Chart Title</label>

                <input type="text"
                       id="default-input"
                       onChange={props.handleChartTitleChange}
                       className="bg-gray-50
                       border
                       border-gray-300
                       text-gray-900
                       text-sm rounded-lg
                       focus:ring-blue-500
                       focus:border-blue-500
                       block
                       w-full
                       p-2.5
                       dark:bg-gray-700
                       dark:border-gray-600
                       dark:placeholder-gray-400
                       dark:text-white
                       dark:focus:ring-blue-500
                       dark:focus:border-blue-500"/>
            </div>

            {
                // ***************//
                // CHART SELECTOR //
                // ***************//
            }

            <label htmlFor="charts" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                an option</label>

            <select id="charts"
                    className="
                    bg-gray-50
                    border
                    border-gray-300
                    text-gray-900
                    text-sm rounded-lg
                    focus:ring-blue-500
                    focus:border-blue-500
                    block
                    w-full
                    p-2.5
                    dark:bg-gray-700
                    dark:border-gray-600
                    dark:placeholder-gray-400
                    dark:text-white
                    ark:focus:ring-blue-500
                    dark:focus:border-blue-500">

                <option selected>Choose a chart</option>
                <option value="BAR">Bar</option>
                <option value="COL">Column</option>
                <option value="PIE">Pie</option>
                <option value="LINE">Line</option>
            </select>
        </div>
    )
}