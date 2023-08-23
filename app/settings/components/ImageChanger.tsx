"use client"

import {useState} from "react";
import AvailableAvatars from "@/app/components/AvailableAvatars";

export default function ImageChanger() {
    const [showImages, setShowImages] = useState<boolean>(false)

    function toggleImageView() {
        setShowImages(!showImages);
    }

    return (
        <div>
            <button onClick={toggleImageView}
                    className="
                           mb-4
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
                           mr-2
                           dark:bg-blue-600
                           dark:hover:bg-blue-700
                           focus:outline-none
                           dark:focus:ring-blue-800"
            >
                Change Avatar
            </button>
            {showImages &&
                <div className={"bg-gray-400 dark:bg-gray-700 rounded-2xl mb-4 py-2 flex flex-wrap justify-start"}>
                    <AvailableAvatars/>
                </div>
            }
        </div>
    )
}