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
                       maxLength={60}
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
                // STOCK SELECTOR //
                // ***************//
            }

            <label htmlFor="stocks" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                a stock</label>

            <select id="stocks"
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

                <option selected>Stock</option>
                <option value="bar">Bar</option>
                <option value="column">Column</option>
                <option value="line">Line</option>
            </select>

            {
                // ******************//
                // CATEGORY SELECTOR //
                // ******************//
            }

            <label htmlFor="stocks" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                a category</label>

            <select id="stocks"
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

                <option selected>Category</option>
                <option value="bar">Bar</option>
                <option value="column">Column</option>
                <option value="line">Line</option>
            </select>


            {
                // ***************//
                // CHART SELECTOR //
                // ***************//
            }

            <label htmlFor="charts" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                a chart type</label>

            <select id="charts"
                    onChange={props.handleChartSelectChange}
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
                <option value="bar">Bar</option>
                <option value="column">Column</option>
                <option value="line">Line</option>
            </select>
        </div>
    )
}