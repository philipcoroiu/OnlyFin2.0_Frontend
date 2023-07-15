"use client"

export default function Feed() {


    return (
        <div className="
            flex
            flex-raw
            items-center
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
                ml-5
                bg-red-300
                h-full
            ">
                <h1>Subscriptions</h1>
                <div className="flex">
                    <div className="
                        w-5
                        h-5
                        bg-blue-300
                    "></div>
                    <button>Default name</button>
                </div>
            </div>
        </div>
    )
}