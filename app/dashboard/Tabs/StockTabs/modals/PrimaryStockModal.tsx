type Props = {
    stockEditButtonIsActive: boolean,
    handleAddStockButtonPress(): void,
    handleStockEditButtonClick(): void,
    handleRemoveSelectedStock(): void,
    handleAddCustomStockModalButtonPress(): void
}

export default function PrimaryStockModal(props: Props) {
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
                 ${props.stockEditButtonIsActive ? "" : "hidden"}`}>

                <div className="relative w-full max-w-md max-h-full">

                    {/* Modal Content */}

                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button"
                                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="crypto-modal"
                                onClick={props.handleStockEditButtonClick}>
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        {/* Modal Header */}
                        <div className="px-6 py-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                                Manage your subjects
                            </h3>
                        </div>
                        {/* Modal Body */}
                        <div className="p-6">
                            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Add, remove, and modify
                                stock names</p>

                            <ul className="my-4 space-y-3">
                                <li>
                                    <button
                                        onClick={props.handleAddStockButtonPress}
                                        className="flex w-full items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-200 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                        <span className="flex-1 ml-3 whitespace-nowrap">Add an existing stock</span>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={props.handleAddCustomStockModalButtonPress}
                                        className="flex w-full items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-200 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                        <span className="flex-1 ml-3 whitespace-nowrap">Add a custom tab</span>
                                    </button>
                                </li>
                                <li>
                                    <button
                                        onClick={props.handleRemoveSelectedStock}
                                        className="flex w-full items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-200 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                        <span className="flex-1 ml-3 whitespace-nowrap">Remove selected stock</span>
                                    </button>
                                </li>
                                {
                                    /* TODO: IMPLEMENT IN THE FUTURE
                                    <li>
                                        <button
                                            className="flex w-full items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-200 hover:bg-gray-300 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                                            <span className="flex-1 ml-3 whitespace-nowrap">Change name</span>
                                        </button>
                                    </li>

                                     */
                                }
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}