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

                const username: string = response.data

                setUsername(username)
            })
            .catch(error => {
                console.log("[me/temp.tsx]: " + error)
            })
    }, [])

    return (
        <>
            {username ?
                <>
                    <div className={`mt-10 mb-7
                                    md:mt-10
                                    lg:mt-15
                                    
                                    mx-auto
                                    px-1
                                    xsm:px-2
                                    sm:px-10
                                    md:w-5/6
                                    lg:w-2/3
                                    `}>
                        <MyProfile
                            username={username}
                        />
                    </div>

                    <div className={`flex flex-wrap justify-center
                                    
                                    mx-auto
                                    px-1
                                    xsm:px-2
                                    sm:px-10
                                    md:w-5/6
                                    lg:w-2/3
                                    `}>
                        <UserReviews
                            targetUsername={username}
                        />
                    </div>
                </>
                :
                <></>
            }
        </>
    )
}