"use client"

import {useState} from "react";

export default function MyProfile({username}: any) {

    const [edit, setEdit] = useState(false)

    return (
        <div className="flex">
            <div className="
                rounded-full
                w-36
                h-36
                bg-blue-600
                ml-5
                mt-5"
            ></div>
            <div className={""}>
                <h1 className="text-xl font-bold ">{username}</h1>
                {edit ? <textarea id="message" className="
                                                    block
                                                    p-2.5
                                                    w-full
                                                    text-sm
                                                    text-gray-900
                                                    bg-gray-50
                                                    rounded-lg
                                                    border
                                                    border-gray-300
                                                    focus:ring-blue-500
                                                    focus:border-blue-500
                                                    dark:bg-gray-700
                                                    dark:border-gray-600
                                                    dark:placeholder-gray-400
                                                    dark:text-white
                                                    dark:focus:ring-blue-500
                                                    dark:focus:border-blue-500"
                              placeholder="Write your thoughts here..."></textarea>
                    :
                    <p>here will be bio</p>
                }

            </div>
        </div>
    )
}