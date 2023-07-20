"use client"

import {useEffect, useState} from "react";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import Avatar from "@/app/components/Avatar";
import Link from "next/link";

export default function MyProfile({username}: any) {

    const [aboutMe, setAboutMe] = useState<string>("")
    const [editView, setEdit] = useState<boolean>(false)

    useEffect(() => {
        ApiCalls.fetchAboutMe(username)
            .then(response => {
                setAboutMe(response.data)
            })
            .catch(error => {
                console.log("[me/MyProfile.useEffect()]: " + error)
            })
    }, [])

    function toggleEdit() {
        setEdit(!editView)
    }

    function setText(event: any): void {
        setAboutMe(event.target.value)
    }

    function updateBio() {
        ApiCalls.updateAboutMe(aboutMe)
            .then(response => {
                toggleEdit()
            })
            .catch(error => {
                console.log("[me/MyProfile.updateBio()]: " + error)
            })
    }

    return (
        <div className={`
                        bg-gray-50 
                        rounded-lg 
                        p-7 
                        w-full 
                        dark:bg-gray-700
                        flex
                        justify-center`}
        >
            {/*flex items-center flex-wrap justify-center bg-blue-950*/}


            <div className="w-40 h-40">
                <Avatar/>
            </div>

            <div className="
                    flex
                    flex-col
                    h-full
                    w-60
                    bg-blue-800
                    "
            >

                {!editView ?
                    // Viewing mode
                    <div className="
                    flex
                    flex-col
                    justify-between
                    h-full
                    ">
                        <h1 className="text-xl font-bold my-1">{username}</h1>

                        <p className="my-1">{aboutMe}</p>

                        <button
                            className="
                        my-1
                        inline-flex
                        items-center
                        py-2.5
                        px-4
                        text-xs
                        font-medium
                        text-center
                        text-white
                        bg-blue-700
                        rounded-lg
                        focus:ring-4
                        focus:ring-blue-200
                        dark:focus:ring-blue-900
                        hover:bg-blue-800"

                            onClick={toggleEdit}
                        >
                            Edit bio
                        </button>
                    </div>

                    :
                    // Edit mode
                    <div
                        className="border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                            <label htmlFor="comment" className="sr-only">Your comment</label>
                            <textarea id="comment"
                                      className="w-full h-20 px-0 text-sm text-gray-900 bg-white border-0 outline-none dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                      onChange={setText}
                                      value={aboutMe}
                                      placeholder="Write a bio..."></textarea>
                        </div>
                        <div
                            className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                            <button type="submit"
                                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                                    onClick={updateBio}
                            >
                                Save bio
                            </button>
                        </div>
                    </div>

                }

            </div>
        </div>
    )

}