"use client"

import Avatar from "@/app/components/Avatar";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import Link from "next/link";

export default function SearchProfile({username, isSubscribed}: any) {
    const [subscribed, setSubscribed] = useState(isSubscribed);
    const router = useRouter()

    function handleSubscribeButtonClick() {
        if (!subscribed) {
            subscribe()
        } else {
            unsubscribe()
        }
    }

    function subscribe() {
        ApiCalls.subscribe(username)
            .then(response => {
                setSubscribed(true)
            })
            .catch(error => {
                if (error.response.status === 401) {
                    router.push("/login")
                }
            })
    }

    function unsubscribe() {
        ApiCalls.unsubscribe(username)
            .then(response => {
                setSubscribed(false)
            })
            .catch(error => {
                if (error.response.status === 401) {
                    router.push("/login")
                }
            })
    }

    return (
        <div className="bg-gray-700 rounded-lg p-4">
            <Avatar/>

            <div className="text-xl font-bold">
                <Link href={"/users/" + username}>{username}</Link>
            </div>

            <button
                onClick={handleSubscribeButtonClick}
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
                {subscribed ? "UNSUBSCRIBE" : "SUBSCRIBE"}
            </button>
        </div>
    )
}