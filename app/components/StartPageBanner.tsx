
export default function startPageBanner() {
    return (
        <div id="bottom-banner"
             className="fixed bottom-0 left-0 z-50 flex justify-between w-full p-4 border-t border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="flex items-center mx-auto">
                <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
                    <span>Monetization is coming soon</span>
                </p>
            </div>
            <div className="flex items-center">
                <button data-dismiss-target="#bottom-banner" type="button"
                        className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
                    <span className="sr-only">Close banner</span>
                </button>
            </div>
        </div>
    )
}