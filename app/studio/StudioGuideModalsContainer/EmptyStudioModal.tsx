import {useState} from "react";


export default function EmptyStudioModal() {

    //Change "true" to dynamic
    const [modalIsActive, setModalIsActive] = useState(true);

    function handleButtonClick() {
        setModalIsActive(false);
    }

    function renderModal() {
        return (
            <>
                {/* !--Main Modal --! */}
                <div id="crypto-modal" aria-hidden="false"
                     className={`fixed
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
                 ${modalIsActive ? "" : "hidden"}`}>

                    <div className="relative w-full max-w-md max-h-full">

                        {/* Modal Content */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                            {/* Modal Header */}
                            <div className="px-6 py-4 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                                    Empty
                                </h3>
                            </div>
                            {/* Modal Body */}
                            <div className="p-6">
                                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Good job! You have
                                    added your first stock that you want to analyze. Now you need to <u>create a category</u>.
                                    <br/><br/>

                                    <b>What is a category?</b> <br/>Some examples are: Financials, Sales by segment, Competitors... <br/><br/>

                                    Create a category by clicking on the "..." below the word "Category".</p>

                                <ul className="my-4 space-y-3">
                                    <li>
                                        <button
                                            onClick={handleButtonClick}
                                            className="flex w-full items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-200 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                            <span className="flex-1 ml-3 whitespace-nowrap">Got it</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            {renderModal()}
        </>
    )
}