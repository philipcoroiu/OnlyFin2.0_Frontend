"use client"

import React, {useState} from "react";
import TableDropdownMenu from "@/app/studio/toolbar/toolbarTable/TableDropdownMenu";

export default function ToolbarTable() {

    const [dropdownMenuIsActive, setDropdownMenuIsActive] = useState(false);

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
                            id="dropdownMenuIconHorizontalButton"
                            data-dropdown-toggle="dropdownDotsHorizontal"
                            type="button"
                            onClick={handleEditButtonClick}
                            className="inline-flex
                            items-center
                            p-2
                            text-sm
                            font-medium
                            text-center
                            text-gray-900
                            bg-white
                            rounded-lg
                            hover:bg-gray-100
                            focus:ring-4
                            focus:outline-none
                            dark:text-white
                            focus:ring-gray-50
                            dark:bg-gray-800
                            dark:hover:bg-gray-700
                            dark:focus:ring-gray-600"
                        >

                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                            </svg>

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