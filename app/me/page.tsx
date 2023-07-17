"use client"

import {useEffect, useState} from "react";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import MyProfile from "@/app/me/components/MyProfile";
import {useRouter} from "next/navigation";
import UserReviews from "@/app/users/components/UserReviews";

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
                <>
                    <div className={""}>
                        <MyProfile
                            username={username}
                        />
                    </div>

                    <div className={"flex-wrap justify-center py-7"}>
                        <UserReviews
                            targetUsername={username}
                        />
                    </div>
                </>
                :
                <></>
            }
        </div>
    )
}