import {useState} from "react";

type Props = {
    categoryEditButtonIsActive: boolean,
    handleExitButtonClick(): void,
    handleChangeCategoryNameModalClick(changeCategoryNameInput: string): void
}

export default function ChangeCategoryNameModal(props: Props) {

    const [newCategoryName, setNewCategoryName] = useState<string>("")

    function handleInputChange(categoryNameInput: string) {
        setNewCategoryName(categoryNameInput)
    }

    return (
        <>
            {/* !--Main Modal --! */}
            <div id="crypto-modal" aria-hidden="false"
                 className=
                     {`fixed
                         top-0
                         left-0
                         right-0
                         z-50
                         w-full
                         p-4
                         overflow-y-auto
                         md:inset-0
                         max-h-full
                         flex
                         items-center
                         justify-center
                         h-screen
                         bg-black
                         bg-opacity-50
                         ${props.categoryEditButtonIsActive ? "" : "hidden"}`}>

                <div className="relative w-full max-w-md max-h-full">

                    {/* Modal Content */}

                    <div className="relative
                                    bg-white
                                    rounded-lg
                                    shadow
                                    dark:bg-gray-700">

                        <button type="button"
                                className="absolute
                                            top-3
                                            right-2.5
                                            text-gray-400
                                            bg-transparent
                                            hover:bg-gray-200
                                            hover:text-gray-900
                                            rounded-lg
                                            text-sm
                                            w-8
                                            h-8
                                            ml-auto
                                            inline-flex
                                            justify-center
                                            items-center
                                            dark:hover:bg-gray-600
                                            dark:hover:text-white"
                                data-modal-hide="crypto-modal"
                                onClick={props.handleExitButtonClick}>

                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>

                        {/* Modal Header */}

                        <div className="px-6
                                        py-4
                                        border-b
                                        rounded-t
                                        dark:border-gray-600">

                            <h3 className="text-base
                                            font-semibold
                                            text-gray-900
                                            lg:text-xl
                                            dark:text-white"
                            >
                                Rename selected category
                            </h3>
                        </div>

                        {/* Modal Body */}

                        <div className={"p-6 space-y-3"}>
                            <div>
                                <input
                                    type="text"
                                    name="category name"
                                    id="category name"
                                    placeholder="Category name"
                                    onChange={(event) => handleInputChange(event.target.value)}

                                    className="bg-gray-50
                                                    border
                                                    border-gray-300
                                                    text-gray-900
                                                    text-sm
                                                    rounded-lg
                                                    focus:ring-blue-500
                                                    focus:border-blue-500
                                                    block
                                                    w-full
                                                    p-2.5
                                                    dark:bg-gray-600
                                                    dark:border-gray-500
                                                    dark:placeholder-gray-400
                                                    dark:text-white"
                                    required
                                />
                            </div>


                            <button onClick={() => props.handleChangeCategoryNameModalClick(newCategoryName)}
                                    className="w-full
                                                    text-white
                                                    bg-blue-700
                                                    hover:bg-blue-800
                                                    focus:ring-4
                                                    focus:outline-none
                                                    focus:ring-blue-300
                                                    font-medium rounded-lg
                                                    text-sm px-5 py-2.5
                                                    text-center
                                                    dark:bg-blue-600
                                                    dark:hover:bg-blue-700
                                                    dark:focus:ring-blue-800
                                                    my-5"
                            >
                                Submit
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}