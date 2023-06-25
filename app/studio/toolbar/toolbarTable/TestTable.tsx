"use client"
import Spreadsheet from "react-spreadsheet";
import {useState} from "react";

export default function TestTable() {

    const [data, setData] = useState([
        [{ value: "Vanilla" }, { value: "Chocolate" }],
        [{ value: "Strawberry" }, { value: "Cookies" }],
    ]);

    return(
        <Spreadsheet data={data} />
    )
}