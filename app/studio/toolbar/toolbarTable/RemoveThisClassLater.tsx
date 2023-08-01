"use client"

import React, {useState} from "react";
import TableDropdownMenu from "@/app/studio/toolbar/toolbarTable/TableDropdownMenu";
import ToolbarTable from "@/app/studio/toolbar/toolbarTable/ToolbarTable";

export default function RemoveThisClassLater() {

    const [dropdownMenuIsActive, setDropdownMenuIsActive] = useState<boolean>(false);

    function handleEditButtonClick() {
        setDropdownMenuIsActive(prevState => !prevState)
    }

    return(
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
                <thead className="text-s text-white uppercase bg-blue-600 dark:text-white">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        <input
                            className="text-blue-50 leading-tight focus:outline-none bg-transparent placeholder-gray-300"
                            type="text"
                            placeholder="CATEGORY"
                        />
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <input
                            className="text-blue-50 leading-tight focus:outline-none bg-transparent placeholder-gray-300"
                            type="text"
                            placeholder="CATEGORY"
                        />
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <input
                            className="text-blue-50 leading-tight focus:outline-none bg-transparent placeholder-gray-300"
                            type="text"
                            placeholder="CATEGORY"
                        />
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-blue-500 border-b border-blue-400">
                    <th scope="row"
                        className="px-6 py-2 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                        <input
                            className="text-blue-50 leading-tight focus:outline-none bg-transparent placeholder-gray-300"
                            type="text"
                            placeholder="Value"
                        />
                    </th>
                    <td className="px-6 py-4">
                        <input
                            className="text-blue-50 leading-tight focus:outline-none bg-transparent placeholder-gray-300"
                            type="text"
                            placeholder="Value"
                        />
                    </td>
                    <td className="px-6 py-4">
                        <input
                            className="text-blue-50 leading-tight focus:outline-none bg-transparent placeholder-gray-300"
                            type="text"
                            placeholder="Value"
                        />
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" className="font-medium text-white hover:underline">Edit</a>
                    </td>
                </tr>
                <tr className="bg-blue-600 border-b border-blue-400">
                    <th scope="row"
                        className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                        <input
                            className="text-blue-50 leading-tight focus:outline-none bg-transparent placeholder-gray-300"
                            type="text"
                            placeholder="Value"
                        />
                    </th>
                    <td className="px-6 py-4">
                        <input
                            className="text-blue-50 leading-tight focus:outline-none bg-transparent placeholder-gray-300"
                            type="text"
                            placeholder="Value"
                        />
                    </td>
                    <td className="px-6 py-4">
                        <input
                            className="text-blue-50 leading-tight focus:outline-none bg-transparent placeholder-gray-300"
                            type="text"
                            placeholder="Value"
                        />
                    </td>
                    <td className="px-6 py-4">
                        <a href="#" className="font-medium text-white hover:underline">Edit</a>
                    </td>
                </tr>
                <tr className="bg-blue-500 border-b border-blue-400">
                    <th scope="row"
                        className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                        <input
                            className="text-blue-50 leading-tight focus:outline-none bg-transparent placeholder-gray-300"
                            type="text"
                            placeholder="Value"
                        />
                    </th>
                    <td className="px-6 py-4">
                        <input
                            className="text-blue-50 leading-tight focus:outline-none bg-transparent placeholder-gray-300"
                            type="text"
                            placeholder="Value"
                        />
                    </td>
                    <td className="px-6 py-4">
                        <input
                            className="text-blue-50 leading-tight focus:outline-none bg-transparent placeholder-gray-300"
                            type="text"
                            placeholder="Value"
                        />
                    </td>
                    <td className="px-6 py-4">


                        {
                            // ************//
                            // EDIT BUTTON //
                            // ************//
                        }

                        <button
                            id="dropdownLeftButton" data-dropdown-toggle="dropdownLeft" data-dropdown-placement="left"
                            type="button"
                            onClick={handleEditButtonClick}
                            className="inline-flex
                            items-center
                            p-2
                            mr-20
                            text-sm
                            font-medium
                            text-center
                            text-gray-900
                            bg-white
                            rounded-lg
                            hover:bg-gray-100
                            dark:text-white
                            dark:bg-gray-800
                            dark:hover:bg-gray-700
                            dark:focus:ring-gray-600"
                        >
                            remove

                        </button>

                        <TableDropdownMenu
                            dropdownMenuIsActive={dropdownMenuIsActive}
                        />
                    </td>
                </tr>
                </tbody>
            </table>


        </div>
    )
}