"use client"

import Avatar from "@/app/components/Avatar";

export default function LoggedInButtons() {
    return (
        <div className="flex items-center">
            <a href="/" className="flex items-center">
                <div className="mr-1">
                    <Avatar/>
                </div>
                <p className="ml-2">Username</p>
            </a>
            <a href="/login"
               className="
                           text-gray-800
                           dark:text-white
                           hover:bg-gray-50
                           focus:ring-4
                           focus:ring-gray-300
                           font-medium
                           rounded-lg
                           text-sm
                           px-4
                           lg:px-5
                           py-2
                           lg:py-2.5
                           mr-2
                           dark:hover:bg-gray-700
                           focus:outline-none
                           dark:focus:ring-gray-800
                           ml-5"
            >Log out</a>
        </div>
    )
}