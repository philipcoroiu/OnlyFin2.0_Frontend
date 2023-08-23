"use client"

import Link from "next/link";
import {useSearchParams} from "next/navigation";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import React, {useState} from "react";
import InputField from "@/app/register/components/InputField";

export default function Page() {
    const searchParams = useSearchParams()
    const redirectParam = searchParams.get("redirect")

    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)

    /**
     * window.location.href is used here instead of Router.push() on purpose.
     * This is used to trigger a re-render of the Header component to get the version with the logged-in buttons.
     */
    function handleSubmit(event: any) {
        event.preventDefault()

        const formData = new FormData(event.target)
        const email = formData.get("Email")
        const password = formData.get("Password")

        ApiCalls.login(email, password)
            .then(response => {
                if (response) {
                    window.location.href = redirectParam ? `/${redirectParam}` : '/dashboard'
                }
                else {
                    displayErrorMessage()
                }
            })
            .catch(() => {
                displayErrorMessage()
            })
    }

    function displayErrorMessage() {
        /* sets the showErrorMessage to true to show the error messages */
        setShowErrorMessage(true);
    }

    return (
        <div className="
            mx-auto
            max-w-2xl
            py-20
            px-1
            md:px-20
            lg:px-20
            ">
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
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <span>Don't have an account? </span>
                        <Link className="text-blue-600 transition duration-200 hover:underline dark:text-blue-400"
                              href={"/register"}>
                            Register!
                        </Link>
                    </p>
                </div>

                <form className="mt-8 space-y-6 flex flex-col items-center" onSubmit={handleSubmit}>

                    {/*Email*/}
                    <InputField error={undefined} errorType={""} inputName={"Email"} inputValue={undefined} inputType={"email"} onChange={() => {}}></InputField>

                    {/*Password*/}
                    <InputField error={undefined} errorType={""} inputName={"Password"} inputValue={undefined} inputType={"password"} onChange={() => {}}></InputField>

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
                </form>
            </div>
        </div>
    )
}