import Spreadsheet from "react-spreadsheet";
import { useState } from "react";

export default function ToolbarTable(props : any) {

    const initStudioSpreadsheetData = [
        [{ value: 'Year' }, { value: "Mike" }, { value: "John" }, { value: "Anna" }],
        [{ value: '2020' }, { value: 2 }, { value: 3 }, { value: 2 }],
        [{ value: '2021' }, { value: 2 }, { value: 3 }, { value: 2 }],
        [{ value: '2022' }, { value: 3 }, { value: 2 }, { value: 3 }],
    ]

    const [spreadsheetData, setSpreadsheetData] = useState(initStudioSpreadsheetData);

    function handleSpreadsheetChange(newData : any) {
        //setSpreadsheetData(newData);
        props.handleChartDataChange(newData)
    }

    function handleAddColumnClick() {
        props.setChartData((prevData: TableCell) => prevData.map(row => [...row, { value: "" }]));
        setSpreadsheetData((prevData: any) => prevData.map((row: any) => [...row, { value: "" }]))
    }

    function handleRemoveColumnClick() {
        props.setChartData((prevData: TableCell) => prevData.map(row => row.slice(0, -1)));
        setSpreadsheetData((prevData: any) => prevData.map((row: any) => row.slice(0, -1)));
    }

    function handleAddRowClick() {
        const newRow = new Array(spreadsheetData[0].length).fill({ value: "" });
        props.setChartData((prevData: TableCell) => [...prevData, newRow]);
        setSpreadsheetData((prevData: any) => [...prevData, newRow])
    }

    function handleRemoveRowClick() {
        /*
        props.setChartData((prevData: TableCell) => {
            const newData = [...prevData];
            newData.pop();
            return newData;
        });
        */
        setSpreadsheetData((prevData: any) => {
            const newData = [...prevData];
            newData.pop();
            return newData;
        })
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

            <Spreadsheet data={spreadsheetData} onChange={handleSpreadsheetChange} />
        </div>
    );
}
