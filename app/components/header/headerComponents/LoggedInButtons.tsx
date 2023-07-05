"use client"

import Avatar from "@/app/components/Avatar";
import Link from "next/link";

export default function LoggedInButtons(props : any) {



    return (
        <div className="flex items-center">
            <Link href="/" className="flex items-center">
                <div className="mr-1">
                    <Avatar/>
                </div>
                <p className="ml-2">{props.username}</p>
            </Link>
            <Link href="/login"
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
            >Log out</Link>
        </div>
    )
}