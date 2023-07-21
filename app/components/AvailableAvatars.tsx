"use client"

import {ApiCalls} from "@/app/utilities/ApiCalls";

//TODO: scrap this cursed code for a proper settings page
export default function AvailableAvatars() {

    function chooseAvatar(avatarId: number) {
        ApiCalls.updateProfilePicture(avatarId)
            .then(response => {
                document.location.reload()
            })
            .catch(error => {
                console.log("[app/AvailableAvatars.renderAllAvatars()]: " + error)
            })
    }

    function renderAllAvatars() {
        let avatars = []

        for (let i = 0; i <= 16; i++) {
            avatars.push(
                <button className={"w-40 h-40 p-1"}
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