"use client"

import Avatar from "@/app/components/Avatar";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {ApiCalls} from "@/app/utilities/ApiCalls";

/**
 * WARNING: Don't use this in lists as this component performs operations expensive at scale!
 *
 * This component produces a profile card of a user. It fetches subscription status & "about me" text automagically
 *
 * TODO: Add user not found error message (HTTP 404 response in getUser() api call)
 */
export default function UserProfileCard({username}: any) {
    const [user, setUser] = useState<OnlyfinProfileExtended>()
    const [subscribed, setSubscribed] = useState<boolean>()

    const router = useRouter()

    useEffect(() => {
        ApiCalls.getUser(username)
            .then((response) => {
                const data: OnlyfinProfileExtended = response.data

                setUser(data)
                setSubscribed(data.isSubscribed)
            })
            .catch(error => {
                console.log("[UserProfileCard.useEffect()]: " + error)

            })
    }, [])

    function handleSubscribeButtonClick() {
        if (!subscribed) {
            subscribe()
        }
        else {
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
                    router.push("/login?redirect=users/" + username)
                } else {
                    console.log("[UserProfileCard.subscribe()]: " + error)
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
                    router.push("/login?redirect=users/" + username)
                } else {
                    console.log("[UserProfileCard.unsubscribe()]: " + error)
                }
            })
    }

    function renderUserProfile() {
        return (
            <div className={user?.self ?
                //Easter egg when viewing your own profile
                `animate-[spin_1s_ease-in-out_1]
                bg-gray-50
                rounded-lg
                p-7
                m-7
                w-1/2
                dark:bg-gray-700`
                :
                `bg-gray-50 
                rounded-lg 
                p-7 
                m-7
                w-1/2
                dark:bg-gray-700`}
            >

                <Avatar/>

                <div className={"text-3xl font-bold py-3"}>
                    {username}
                </div>

                <button
                    onClick={handleSubscribeButtonClick}
                    type="button"
                    className="
                           text-white
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
                           dark:focus:ring-blue-800"
                >
                    {subscribed ? "UNSUBSCRIBE" : "SUBSCRIBE"}
                </button>

                <div className={"text-center"}>
                    {user?.aboutMe}
                </div>
            </div>
        )
    }

    function renderLoading() {
        return (
            <div className={`
                bg-gray-50
                rounded-lg
                p-7
                m-7
                w-1/2
                animate-pulse
                dark:bg-gray-700`}
            >
                <Avatar/>

                <div className={"text-3xl font-bold py-3"}>
                    {username}
                </div>
            </div>
        )
    }

    return (
        <>
            {user ? renderUserProfile() : renderLoading()}
        </>
    )
}