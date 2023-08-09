import Spreadsheet from "react-spreadsheet";
import {Dispatch, SetStateAction, useState} from "react";
import _ from 'lodash';

type Props = {
    handleChartDataChange(newChartData: any): void,
    tableData: DataArray[],
    setTableData: Dispatch<SetStateAction<DataArray[]>>
}

export default function ToolbarTable(props: Props) {

    const initStudioSpreadsheetData = props.tableData

    if(!props.tableData) {
        return(
            <p>Loading</p>
        )
    }

    /*
    In case of major bug lol:

    const initStudioSpreadsheetData = [
        [{ value: 'Billions' }, { value: "Amazon" }, { value: "Apple" }, { value: "Google" }],
        [{ value: '2021' }, { value: 469 }, { value: 378 }, { value: 257 }],
        [{ value: '2022' }, { value: 513 }, { value: 387 }, { value: 282 }],
        [{ value: '2023' }, { value: 524 }, { value: 385 }, { value: 284 }],
    ]

     */

    const [spreadsheetData, setSpreadsheetData] = useState<DataArray[]>(initStudioSpreadsheetData);

    function handleSpreadsheetChange(newData : any) {
        handleTableDataChange(newData)
        props.handleChartDataChange(newData)
    }

    function handleTableDataChange(newTableData: DataArray[]) {
        if (!_.isEqual(newTableData, spreadsheetData)) {
            setSpreadsheetData(newTableData);
        }
    }

    function handleAddColumnClick() {
        props.setTableData((prevData: TableCell) => prevData.map(row => [...row, { value: "" }]));
        setSpreadsheetData((prevData: any) => prevData.map((row: any) => [...row, { value: "" }]))
    }

    function handleRemoveColumnClick() {
        props.setTableData((prevData: TableCell) => prevData.map(row => row.slice(0, -1)));
        setSpreadsheetData((prevData: any) => prevData.map((row: any) => row.slice(0, -1)));
    }

    function handleAddRowClick() {
        const newRow = new Array(spreadsheetData[0].length).fill({ value: "" });
        props.setTableData((prevData: TableCell) => [...prevData, newRow]);
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
        <div className="flex flex-col items-center mt-4">
            <div className="grid grid-cols-2">

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
                        dark:hover:bg-gray-700">Add Column ⇆
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
                        dark:hover:bg-gray-700">Remove Column ⇆
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
                        dark:hover:bg-gray-700">Add Row ⇅
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
                        dark:hover:bg-gray-700">Remove Row ⇅
                </button>
            </div>

            {
                // ******************//
                // SPREADSHEET TABLE //
                // ******************//
            }
            <div className="mt-8">
                <Spreadsheet data={spreadsheetData} onChange={handleSpreadsheetChange} />
            </div>
        </div>
    );
}
