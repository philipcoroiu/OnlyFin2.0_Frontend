"use client"

import {useState} from "react";

export default function Feed() {

    const [showComments, setShowComments] = useState(false)

    function manageComments() {
        setShowComments(!showComments);
    }

    return (
        <div className="
            flex
            flex-raw
            h-screen
            scroll-auto
        ">
            <div className="

                w-4/5
                h-full
                flex
                flex-col
                items-center
                ml-5
            ">
                <button className="
                bg-gray-50
                hover:bg-blue-600
                hover:text-white
                h-11
                w-full
                rounded-t-lg
                text-xl
                mt-3
                border-b
                border-b-gray-300
                hover:border-b-blue-600
                drop-shadow-lg
                ">
                    Update feed
                </button>

                <div className="
                h-1/2
                w-full
                bg-gray-50
                flex
                flex-col
                justify-end
                items-center
                rounded-b-lg
                drop-shadow-lg
                ">
                    <h1 className="
                        text-3xl
                        w-full
                        h-5/6
                        text-center
                        border-b
                        border-b-gray-300
                        bg-gray-50
                    ">Eventual first chart will be here</h1>

                    <div className="
                        flex
                        justify-around
                        w-full
                        bg-gray-50
                        rounded-b-lg
                    ">
                        <button className="
                        px-4
                        m-1
                        hover:bg-blue-600
                        hover:rounded-3xl
                        hover:text-white
                        ">Like 420</button>
                        <button className="
                        px-4
                        m-1
                        hover:bg-blue-600
                        hover:rounded-3xl
                        hover:text-white
                        "
                        >Comment 228</button>
                        <button className="
                        px-4
                        m-1
                        hover:bg-blue-600
                        hover:rounded-3xl
                        hover:text-white
                        ">Dislike 69</button>
                    </div>
                </div>

                <div className="
                h-96
                w-full
                m-5
                bg-gray-50
                flex
                flex-col
                justify-end
                items-center
                rounded-lg
                drop-shadow-lg
                ">
                    <h1 className="
                        text-3xl
                        w-full
                        h-5/6
                        text-center
                        border-b
                        border-b-gray-300
                        bg-gray-50
                    ">Eventual chart will be here</h1>

                    <div className="
                        flex
                        justify-around
                        w-full
                        bg-gray-50
                        rounded-b-lg
                    ">
                        <button className="
                        px-4
                        m-1
                        hover:bg-blue-600
                        hover:rounded-3xl
                        hover:text-white
                        ">Like 420</button>
                        <button className="
                        px-4
                        m-1
                        hover:bg-blue-600
                        hover:rounded-3xl
                        hover:text-white
                        ">Comment 228</button>
                        <button className="
                        px-4
                        m-1
                        hover:bg-blue-600
                        hover:rounded-3xl
                        hover:text-white
                        ">Dislike 69</button>
                    </div>
                </div>
            </div>

            <div className="
                fixed
                right-1
                m-2
                h-5/6
                w-1/6
                bg-gray-100
                rounded
                drop-shadow-lg
                flex
                flex-col
                items-center
            ">
                <h1 className="
                text-center
                    w-full
                    m-2
                    border-b
                    border-b-gray-300
                ">Subscriptions</h1>
                <div className="
                    w-full
                ">
                    <div className="
                        flex
                        w-full
                        my-5
                        ml-2
                    ">
                        <div className="
                            w-7
                            h-7
                            mr-2
                            bg-blue-300
                            rounded-full
                        "></div>
                        <button>Mai Co</button>
                    </div>
                    <div className="
                        flex
                        w-full
                        my-5
                        ml-2
                    ">
                        <div className="
                            w-7
                            h-7
                            mr-2
                            bg-blue-400
                            rounded-full
                        "></div>
                        <button>Ces Lon</button>
                    </div>
                    <div className="
                        flex
                        w-full
                        my-5
                        ml-2
                    ">
                        <div className="
                            w-7
                            h-7
                            mr-2
                            bg-blue-500
                            rounded-full
                        "></div>
                        <button>Ngbro Der</button>
                    </div>
                </div>
            </div>
        </div>
    )
}