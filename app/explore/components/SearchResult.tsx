"use client"

import Avatar from "@/app/components/Avatar";


export default function SearchResult(props : any) {

    function renderSearchResult() {
        if (!props.searchResult) {
            return props.searchResult.map((data: any, index: number) => {
                return (
                    <div
                        className="mx-auto
                        my-10
                        px-4
                        sm:px-6
                        lg:px-20">

                        <div
                            className="grid
                            grid-cols-2
                            md:grid-cols-4
                            gap-4">

                            <div
                                key={index}
                                className="bg-gray-700 rounded-lg p-4">
                                <Avatar/>
                                <h3
                                    className="text-xl
                                    font-bold">
                                    {props.searchResult[index].username}
                                </h3>

                                <button
                                    type="button"
                                    className="text-white
                                    bg-blue-700
                                    hover:bg-blue-800
                                    focus:ring-4
                                    focus:ring-blue-300
                                    font-medium
                                    rounded-lg
                                    text-sm
                                    px-5
                                    py-2.5
                                    mr-2
                                    mb-2
                                    dark:bg-blue-600
                                    dark:hover:bg-blue-700
                                    focus:outline-none
                                    dark:focus:ring-blue-800">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>


                );
            });
        } else {
            return (
                <div
                    className="flex
                    items-center
                    justify-center
                    h-screen
                    -mt-96">

                    <div
                        className="w-24
                        px-3
                        py-1
                        text-xs
                        font-medium
                        leading-none
                        text-center
                        text-blue-800
                        bg-blue-200
                        rounded-full
                        animate-pulse
                        dark:bg-blue-900
                        dark:text-blue-200">
                        loading...
                    </div>
                </div>
            )
        }
    }

    return(
        <div>
            {renderSearchResult()}
        </div>
    )
}