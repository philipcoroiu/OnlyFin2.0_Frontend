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
            <Spreadsheet data={spreadsheetData} onChange={handleSpreadsheetChange} />
            <button onClick={printNewData}>print new data</button>
        </div>
    );
}
