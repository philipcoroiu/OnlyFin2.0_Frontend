"use client"

import {ApiCalls} from "@/app/utilities/ApiCalls";
import {useRouter} from "next/navigation";

export default function AvailableAvatars() {
    const router = useRouter()

    function chooseAvatar(avatarId: number) {
        ApiCalls.updateProfilePicture(avatarId)
            .then(response => {
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

        for (let i = 0; i <= 57; i++) {
            avatars.push(
                <button key={i} className={"w-20 h-20 p-1 transition duration-300 ease-in-out hover:scale-125"}
                        onClick={() => {
                            chooseAvatar(i)
                        }}>
                    <img src={`/Avatars/avatar-${i}.svg`} alt={`Profile picture ${i}`}/>
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