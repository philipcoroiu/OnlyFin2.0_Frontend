"use client"

import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import Avatar from "@/app/components/Avatar";

export default function UserInformation() {
    const [username, setUsername] = useState<string>()

    const router = useRouter()

    useEffect(() => {
        ApiCalls.whoAmI()
            .then(response => {
                if (response.status === 204) {
                    router.push("/login?redirect=settings")
                }

                const username: string = response.data

                setUsername(username)
            })
            .catch(error => {
                console.log("[settings/UserInformation]: " + error)
            })
    }, [])


    return (
        <div>
            <div className={"flex items-center"}>
                <div className={"w-28 h-28"}>
                    <Avatar
                        username={username}
                    />
                </div>
                <p className={"text-2xl font-bold"}>{username}</p>


            </div>

        </div>
    )
}