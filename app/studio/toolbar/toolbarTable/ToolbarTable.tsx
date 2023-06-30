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

    function handleAddColumnClick() {
        setSpreadsheetData(prevData => prevData.map(row => [...row, { value: "" }]));
    }

    function handleRemoveColumnClick() {
        setSpreadsheetData(prevData => prevData.map(row => row.slice(0, -1)));
    }


    function printNewData() {
        console.log(spreadsheetData);
    }

    return (
        <div>

            {
                // **************//
                // CHART BUTTONS //
                // **************//
            }

            <button type="button"
                    onClick={handleAddColumnClick}
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
                    onClick={handleRemoveColumnClick}
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
