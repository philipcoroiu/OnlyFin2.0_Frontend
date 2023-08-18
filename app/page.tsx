import Link from "next/link";
import StartPageBanner from "./components/StartPageBanner"

export default function App() {
    return (
        <main className="
                mx-auto
                max-w-2xl
                py-32
                sm:py-48
                lg:py-56">


            <div className="text-center">
                <h1 className="
                        text-4xl
                        font-bold
                        tracking-tight
                        dark:text-gray-200
                        sm:text-6xl">
                    The OnlyFans <br/> of stock market analysis
                </h1>
                <p className="
                        mt-6
                        mx-16
                        text-lg
                        leading-8
                        dark:text-gray-300">
                    Visualize and make money on your research
                </p>
                <div className="
                        mt-10
                        flex
                        flex-col
                        xsm:flex-row
                        items-center
                        justify-center
                        gap-6">

                    <Link
                        href="/register"
                        className="
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
                           dark:focus:ring-blue-800">
                        Get started
                    </Link>
                    <Link href="explore" className="
                            text-sm
                            font-semibold
                            leading-6
                            dark:text-gray-300">
                        Explore <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>

            <StartPageBanner/>

        </main>
    )
}
