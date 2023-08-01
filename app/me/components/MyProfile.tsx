"use client"

import {useEffect, useState} from "react";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import Avatar from "@/app/components/Avatar";

type Props = { username: string }

export default function MyProfile(props: Props) {

    const [aboutMeText, setAboutMeText] = useState<string>("")
    const [maxCharacter, setMaxCharacter] = useState<number>(2500)

    const [editView, setEdit] = useState<boolean>(false)

    useEffect(() => {
        ApiCalls.fetchAboutMe(props.username)
            .then(response => {
                setAboutMeText(response.data)
            })
            .catch(error => {
                console.log("[me/MyProfile.useEffect()]: " + error)
            })
    }, [])

    function toggleEdit() {
        setEdit(!editView)
    }

    function setText(event: any): void {
        setMaxCharacter(2500 - event.target.value.length)

        setAboutMeText(event.target.value)
    }

    function updateBio() {
        ApiCalls.updateAboutMe(aboutMeText)
            .then(response => {
                toggleEdit()
            })
            .catch(error => {
                console.log("[me/MyProfile.updateBio()]: " + error)
            })
    }

    return (
        <div className={`lg:w-3/4
                        mx-auto
                        bg-gray-50 
                        rounded-lg 
                        p-7 
                        dark:bg-gray-700
                        flex
                        flex-col
                        items-center`}
        >
            {/*flex items-center flex-wrap justify-center bg-blue-950*/}


            <div className="w-24 h-24 mb-4">
                <Avatar
                    username={props.username}
                />
            </div>

            <div className="
                    flex
                    flex-col
                    w-full
                    h-full
                    "
            >

                {!editView ?
                    // Viewing mode
                    <div className="
                    flex
                    flex-col
                    justify-between
                    w-full
                    ">
                        <h1 className="text-xl font-bold my-1 break-words text-center">{props.username}</h1>

                        <p className="my-1 break-words ">{aboutMeText}</p>


                        <button
                            className="
                           self-center
                           text-white
                           bg-blue-700
                           hover:bg-blue-800
                           focus:ring-4
                           focus:ring-blue-300
                           font-medium
                           rounded-lg
                           text-sm px-4
                           lg:px-5 py-2
                           lg:py-2.5
                           dark:bg-blue-600
                           dark:hover:bg-blue-700
                           focus:outline-none
                           dark:focus:ring-blue-800
                           max-w-xl
                           "
                            onClick={toggleEdit}
                        >
                            Edit bio
                        </button>
                    </div>

                    :
                    // Edit mode

                    <>
                        <h1 className="text-xl font-bold my-1 break-words text-center">{props.username}</h1>

                        <div
                            className="border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 w-full">

                            <div
                                className="px-4 py-3 bg-white rounded-t-lg dark:bg-gray-800 flex flex-col max-h-screen">
                            <textarea id={"textarea-hack"}
                                      className="w-full h-32 outline-none text-gray-900 bg-white border-none dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 "
                                      placeholder="Write a bio..."
                                      maxLength={2500}
                                      required
                                      value={aboutMeText}
                                      onChange={setText}
                            >
                            </textarea>
                                <p className="text-xs self-end mt-1">{maxCharacter} characters remaining</p>
                            </div>

                            <div className="flex justify-center">
                                <button
                                    onClick={updateBio}
                                    type="button"
                                    className="
                                        text-white
                                        bg-blue-700
                                        font-medium
                                        rounded-lg
                                        text-sm
                                        m-2
                                        p-4
                                        hover:bg-blue-800
                                        focus:ring-4
                                        focus:ring-blue-300
                                        focus:outline-none
                                        dark:bg-blue-600
                                        dark:hover:bg-blue-700
                                        dark:focus:ring-blue-800"
                                >
                                    Update about me
                                </button>

                            </div>
                        </div>
                    </>
                }

            </div>
        </div>
    )

}