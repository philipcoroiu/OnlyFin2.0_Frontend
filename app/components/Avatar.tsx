"use client"

import {ApiCalls} from "@/app/utilities/ApiCalls";
import {useEffect, useState} from "react";

type Props = { username: string | undefined }

export default function Avatar(props: Props) {

    const [profilePictureId, setProfilePictureId] = useState<number>()

    useEffect(fetchProfilePicture, [props.username])

    function fetchProfilePicture() {
        if (props.username) {
            ApiCalls.getProfilePicture(props.username)
                .then(response => {
                    const profilePictureId: number = response.data
                    setProfilePictureId(profilePictureId)
                })
                .catch(error => {
                    console.log("[app/components/Avatar.fetchCustomProfilePicture()]: " + error)
                })
        }
        else {
            setProfilePictureId(0)
        }
    }

    function renderProfilePicture() {
        return (
            <img src={`/Avatars/avatar-${profilePictureId}.svg`} alt="Profile picture"></img>
        )
    }

    return (
        <>
            {profilePictureId ? renderProfilePicture() : <img src={`/Avatars/avatar-0.svg`} alt="Profile picture"></img>}
        </>
    )
}