import Spreadsheet, { Cell } from "react-spreadsheet";
import { useState } from "react";

export default function ToolbarTable() {
    const initialData: Cell[][] = [
        [{ value: "Vanilla" }, { value: "Chocolate" }],
        [{ value: "Strawberry" }, { value: "Cookies" }]
    ];

    const [spreadsheetData, setSpreadsheetData] = useState(initialData);

    function handleSpreadsheetChange(newData: Cell[][]) {
        setSpreadsheetData(newData);
    }

    function printNewData() {
        console.log(spreadsheetData);
    }

    return (
        <div>

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

            {
                // **************//
                // CHART BUTTONS //
                // **************//
            }

            <button type="button"
                    className="
                    py-2.5
                    px-5
                    mr-2
                    mb-2
                    text-sm
                    font-medium
                    text-gray-900
                    focus:outline-none
                    bg-white
                    rounded-lg border
                    border-gray-200
                    hover:bg-gray-100
                    hover:text-blue-700
                    focus:z-10
                    focus:ring-4
                    focus:ring-gray-200
                    dark:focus:ring-gray-700
                    dark:bg-gray-800
                    dark:text-gray-400
                    dark:border-gray-600
                    dark:hover:text-white
                    dark:hover:bg-gray-700">Add Row
            </button>

            <button type="button"
                    className="
                    py-2.5
                    px-5
                    mr-2
                    mb-2
                    text-sm
                    font-medium
                    text-gray-900
                    focus:outline-none
                    bg-white
                    rounded-lg border
                    border-gray-200
                    hover:bg-gray-100
                    hover:text-blue-700
                    focus:z-10
                    focus:ring-4
                    focus:ring-gray-200
                    dark:focus:ring-gray-700
                    dark:bg-gray-800
                    dark:text-gray-400
                    dark:border-gray-600
                    dark:hover:text-white
                    dark:hover:bg-gray-700">Remove Row
            </button>

            <button type="button"
                    className="
                    py-2.5
                    px-5
                    mr-2
                    mb-2
                    text-sm
                    font-medium
                    text-gray-900
                    focus:outline-none
                    bg-white
                    rounded-lg border
                    border-gray-200
                    hover:bg-gray-100
                    hover:text-blue-700
                    focus:z-10
                    focus:ring-4
                    focus:ring-gray-200
                    dark:focus:ring-gray-700
                    dark:bg-gray-800
                    dark:text-gray-400
                    dark:border-gray-600
                    dark:hover:text-white
                    dark:hover:bg-gray-700">Add Column
            </button>

            <button type="button"
                    className="
                    py-2.5
                    px-5
                    mr-2
                    mb-2
                    text-sm
                    font-medium
                    text-gray-900
                    focus:outline-none
                    bg-white
                    rounded-lg border
                    border-gray-200
                    hover:bg-gray-100
                    hover:text-blue-700
                    focus:z-10
                    focus:ring-4
                    focus:ring-gray-200
                    dark:focus:ring-gray-700
                    dark:bg-gray-800
                    dark:text-gray-400
                    dark:border-gray-600
                    dark:hover:text-white
                    dark:hover:bg-gray-700">Remove Column
            </button>


            {
                // ******************//
                // SPREADSHEET TABLE //
                // ******************//
            }

            <Spreadsheet data={spreadsheetData} onChange={handleSpreadsheetChange} />
            <button onClick={printNewData}>print new data</button>
        </div>
    );
}
