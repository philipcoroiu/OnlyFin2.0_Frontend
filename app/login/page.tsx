"use client"

import Link from "next/link";
import {useSearchParams} from "next/navigation";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import {useState} from "react";

export default function Login() {
    const searchParams = useSearchParams()
    const redirectParam = searchParams.get("redirect")

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)

    function handleEmailChange(event: any) {
        setEmail(event.target.value.toLowerCase());
    }

    function handlePasswordChange(event: any) {
        setPassword(event.target.value);
    }

    /**
     * window.location.href is used here instead of Router.push() on purpose.
     * This is used to trigger a re-render of the Header component to get the version with the logged-in buttons.
     */
    function handleSubmit() {
        ApiCalls.postLoginPlz(email, password)
            .then(response => {
                if (response) {
                    window.location.href = redirectParam ? `/${redirectParam}` : '/dashboard'
                }
                else {
                    displayErrorMessage()
                }
            })
            .catch(error => {
                displayErrorMessage()
            })
    }

    function displayErrorMessage() {

        console.log(email)

        /* sets the showErrorMessage to true to show the error messages */
        setShowErrorMessage(true);

    }

    return (
        <div className="
            mx-auto
            max-w-2xl
            py-32
            sm:py-48
            lg:py-56
            p-12">
            <div className="
                    rounded-[calc(1.5rem-1px)]
                    border-2
                    border-blue-900
                    bg-white
                    px-10 p-12
                    dark:bg-gray-900">
                <div>
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Login to your account
                    </h1>
                    <p className="text-sm tracking-wide text-gray-600 dark:text-gray-300">
                        <span>Don't have an account? </span>
                        <Link className="text-blue-600 transition duration-200 hover:underline dark:text-blue-400"
                              href={"/register"}>
                            Register!
                        </Link>
                    </p>
                </div>

                <div className="mt-8 space-y-6">
                    <div className="space-y-6">
                        <input className="
                                w-full
                                bg-transparent
                                text-gray-600
                                dark:text-white
                                dark:border-gray-700
                                rounded-md
                                border
                                border-gray-300
                                px-3
                                py-2
                                text-sm
                                placeholder-gray-600
                                invalid:border-red-500
                                dark:placeholder-gray-300"
                               type="email"
                               value={email}
                               onChange={handleEmailChange}
                               placeholder="Email"
                               maxLength={50}
                        />

                        <input className="
                                w-full
                                bg-transparent
                                text-gray-600
                                dark:text-white
                                dark:border-gray-700
                                rounded-md
                                border
                                border-gray-300
                                px-3
                                py-2
                                text-sm
                                placeholder-gray-600
                                invalid:border-red-500
                                dark:placeholder-gray-300"
                               type="password"
                               value={password}
                               onChange={handlePasswordChange}
                               placeholder="Password"
                               maxLength={100}
                        />
                    </div>

                    {showErrorMessage && (
                        <div className="
                                    text-center
                                    text-red-500
                                    font-bold
                                    text-xl
                                    font-mono"
                        >
                            <p>INCORRECT EMAIL OR PASSWORD!</p>
                        </div>
                    )}

                    <button
                        onClick={handleSubmit}
                        className="
                                h-10
                                px-3
                                w-full
                                text-white
                                text-center

                                bg-blue-700
                                hover:bg-blue-800
                                focus:ring-4
                                focus:ring-blue-300
                                font-medium
                                rounded-lg
                                text-lg
                                dark:bg-blue-600
                                dark:hover:bg-blue-700
                                focus:outline-none
                                dark:focus:ring-blue-800"
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}