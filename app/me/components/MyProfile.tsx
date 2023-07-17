"use client"

import {useEffect, useState} from "react";
import {ApiCalls} from "@/app/utilities/ApiCalls";

export default function MyProfile({username}: any) {

    const [edit, setEdit] = useState(false)

    const[aboutMe, setAboutMe] = useState("")

    useEffect(() => {
        ApiCalls.fetchAboutMe(username).then(response => setAboutMe(response.data))
    },[])

    function changeEdit () {
        setEdit(!edit)
    }

    function setText (event : any) : void {
        console.log(event.target.value)
        setAboutMe(event.target.value)
    }

    function updateBio(){
        ApiCalls.updateAboutMe(aboutMe)
        changeEdit()
    }

    return (
        <div className="flex">
            <div className="
                rounded-full
                w-36
                h-36
                bg-blue-600
                ml-5
                mt-5"
            ></div>
            <div className="
                    bg-yellow-300
                    w-4/5
                    h-52
                    flex
                    flex-col
                    "
            >
                <h1 className="text-xl font-bold m-5 mt-10 bg-white">{username}</h1>
                {edit ?
                    <div className="bg-red-300">

                        <form>
                            <div
                                className="w-4/5 ml-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                                    <label htmlFor="comment" className="sr-only">Your comment</label>
                                    <textarea id="comment"
                                              className="w-full px-0 text-sm text-gray-900 bg-white border-0 outline-none dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                              onChange={setText}
                                              value={aboutMe}
                                              placeholder="Write a bio..." ></textarea>
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
                        </form>

                    </div>
                    :
                    <div>
                        <p className="bg-red-300 w-5/6 ml-5">{aboutMe}</p>
                        <button
                                className="inline-flex items-center ml-5 mt-5 py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                                onClick={changeEdit}
                        >
                            Edit bio
                        </button>
                    </div>
                }

            </div>
        </div>
    )
}