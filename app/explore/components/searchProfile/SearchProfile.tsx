"use client"

import Avatar from "@/app/components/Avatar";

export default function SearchProfile({username} : any) {
    return (
        <div
            className="bg-gray-700 rounded-lg p-4">
            <Avatar/>
            <h3 className="text-xl font-bold">
                {username}
            </h3>

            <button
                type="button"
                className="text-white
                           bg-blue-700
                           hover:bg-blue-800
                           focus:ring-4
                           focus:ring-blue-300
                           font-medium
                           rounded-lg
                           text-sm
                           px-5
                           py-2.5
                           mr-2
                           mb-2
                           dark:bg-blue-600
                           dark:hover:bg-blue-700
                           focus:outline-none
                           dark:focus:ring-blue-800">
                Subscribe
            </button>
        </div>
    )
}