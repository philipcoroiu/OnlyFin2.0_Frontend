"use client"

import {useEffect, useState} from "react";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import MyProfile from "@/app/me/components/MyProfile";

export default function Page() {

    const [username, setUsername] = useState<string>("")

    useEffect(() => {
        ApiCalls.whoAmI()
            .then(response => {
                const data: string = response.data

                setUsername(data)
            })
    }, [])

    return (
        <div className={"text-center justify-center flex"}>
            {username ?
                <MyProfile
                    username={username}
                />
                :
                <></>
            }
        </div>
    )
}