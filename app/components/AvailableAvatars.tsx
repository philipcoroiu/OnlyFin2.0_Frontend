"use client"

import {ApiCalls} from "@/app/utilities/ApiCalls";
import {useRouter} from "next/navigation";
import Image from "next/image";

export default function AvailableAvatars() {
    const router = useRouter()
    
    const NUMBER_OF_AVATARS = 57

    function chooseAvatar(avatarId: number) {
        ApiCalls.updateProfilePicture(avatarId)
            .then(() => {
                document.location.reload()
            })
            .catch(error => {
                if (error.response.status === 401) {
                    router.push("/login?redirect=settings")
                }
                else {
                    console.log("[app/AvailableAvatars.renderAllAvatars()]: " + error)
                }
            })
    }

    function renderAllAvatars() {
        let avatars = []

        for (let i = 0; i <= NUMBER_OF_AVATARS; i++) {
            avatars.push(
                <button key={i} className={"w-20 h-20 p-1 transition duration-300 ease-in-out hover:scale-125"}
                        onClick={() => {
                            chooseAvatar(i)
                        }}>
                    <Image width={100} height={100} src={`/Avatars/avatar-${i}.svg`} alt={`Profile picture ${i}`}/>
                </button>
            )
        }

        return avatars
    }

    return (
        <>
            {renderAllAvatars()}
        </>
    )
}