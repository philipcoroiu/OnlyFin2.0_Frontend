export default function LoadingAnimation() {
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