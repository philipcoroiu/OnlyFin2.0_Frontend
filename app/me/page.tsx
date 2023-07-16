"use client"

import {useEffect, useState} from "react";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import MyProfile from "@/app/me/components/MyProfile";
import {useRouter} from "next/navigation";

export default function Page() {

    const [username, setUsername] = useState<string>("")

    const router = useRouter()

    useEffect(() => {
        ApiCalls.whoAmI()
            .then(response => {
                if (response.status === 204) {
                    router.push("/login?redirect=me")
                }

                const data: string = response.data

                setUsername(data)
            })
            .catch(error => {
                console.log("[me/page.tsx]: " + error)
            })
    }, [])

    return (
        <div className={""}>
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