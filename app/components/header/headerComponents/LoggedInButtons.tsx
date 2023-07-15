"use client"

import Avatar from "@/app/components/Avatar";
import Link from "next/link";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import {useRouter} from "next/navigation";

export default function LoggedInButtons(props : any) {

    const router = useRouter();

    function logOut() {
        ApiCalls.logOut()
            .then(() => {
                window.location.href = "/"
            })
            .catch(error => {
                if (error.response.status === 401) {
                    window.location.href = "/"
                }
            })
    }

    return (
        <div className="flex items-center">
            <Link href="/me" className="flex items-center">
                <div className="mr-1">
                    <Avatar/>
                </div>
                <p className="ml-2">{props.username}</p>
            </Link>
            <button onClick={logOut}
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
            >Log out</button>
        </div>
    )
}