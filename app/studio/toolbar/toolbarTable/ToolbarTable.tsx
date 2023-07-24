import Spreadsheet from "react-spreadsheet";
import { useState } from "react";

export default function ToolbarTable(props : any) {
    const initialData: TableCell = [
        [{ value: "Vanilla" }, { value: "Chocolate" }],
        [{ value: "Strawberry" }, { value: "Cookies" }]
    ];

    const [spreadsheetData, setSpreadsheetData] = useState(initialData);

    //TODO: Replace this function and the state with the prop function
    function handleSpreadsheetChange(newData : any) {
        setSpreadsheetData(newData);
        props.handleChartDataChange(newData)
    }

    function handleAddColumnClick() {
        setSpreadsheetData(prevData => prevData.map(row => [...row, { value: "" }]));
    }

    function handleRemoveColumnClick() {
        setSpreadsheetData(prevData => prevData.map(row => row.slice(0, -1)));
    }

    function handleAddRowClick() {
        const newRow = new Array(spreadsheetData[0].length).fill({ value: "" });
        setSpreadsheetData(prevData => [...prevData, newRow]);
    }

    function handleRemoveRowClick() {
        setSpreadsheetData(prevData => {
            const newData = [...prevData];
            newData.pop();
            return newData;
        });
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
                    onClick={handleAddRowClick}
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
                    onClick={handleRemoveRowClick}
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

            <Spreadsheet data={props.chartData} onChange={(event) => props.handleChartDataChange(event)} />
        </div>
    );
}
