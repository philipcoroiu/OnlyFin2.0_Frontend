import {useState} from "react";

export default function EmptyDashboardModal() {

    //Change "true" to dynamic
    const [modalIsActive, setModalIsActive] = useState<boolean>(true);

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
                                    Your dashboard is empty
                                </h3>
                            </div>
                            {/* Modal Body */}
                            <div className="p-6">
                                <p className="text-sm font-normal text-gray-500 dark:text-gray-400">To visualize your
                                    research you first need to <u>add a stock</u> to your tabs.<br/><br/>
                                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    Do this by clicking on the "..." below the word "Stock".</p>

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