"use client"

import React, {useState} from "react";
import {ApiCalls} from "@/app/utilities/ApiCalls";

export default function PasswordChangeForm() {

    const [showPasswordChangeForm, setShowPasswordChangeForm] = useState<boolean>(false)

    const [oldPassword, setOldPassword] = useState<string>("")
    const [newPassword, setNewPassword] = useState<string>("")
    const [newPasswordConfirmation, setNewPasswordConfirmation] = useState<string>("")
    const [passwordSuccess, setPasswordSuccess] = useState<boolean>(false)

    // Error messages
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [errorType, setErrorType] = useState<string>('')

    const [loading, setLoading] = useState<boolean>(false)

    function toggleShowPasswordChangeForm() {
        setShowPasswordChangeForm(!showPasswordChangeForm)
    }

    function handleOldPasswordChangeEvent(event: any) {
        setOldPassword(event.target.value)
    }

    function handleNewPasswordChangeEvent(event: any) {
        setNewPassword(event.target.value)
    }

    function handleNewPasswordConfirmationChangeEvent(event: any) {
        setNewPasswordConfirmation(event.target.value)
    }

    function passwordOk(): boolean {
        // Check if password is longer than 8 characters.
        if (newPassword.length < 8) {
            setShowErrorMessage(true)
            setErrorMessage("Password must contain at least 8 characters")
            setErrorType("NewPassword")
            return false;
        }

        if (newPassword !== newPasswordConfirmation) {
            setShowErrorMessage(true)
            setErrorMessage("Password does not match")
            setErrorType("BothPassword")
            return false;
        }

        return true;
    }

    function handleSubmit() {
        setShowErrorMessage(false)
        setErrorMessage('')
        setErrorType('')

        if (passwordOk()) {
            setLoading(true)

            ApiCalls.changePassword(oldPassword, newPassword)
                .then(() => {
                    setLoading(false)
                    setShowPasswordChangeForm(false)

                    setOldPassword("")
                    setNewPassword("")
                    setNewPasswordConfirmation("")
                    setPasswordSuccess(true)

                    setTimeout(() => {setPasswordSuccess(false)}, 5000)
                })
                .catch(error => {
                    setShowErrorMessage(true)
                    setErrorMessage(error.response.data)
                    setErrorType("OldPassword")
                    setLoading(false)
                })
        }
    }

    function renderPasswordChangeForm() {
        return (
            <div className="
                    mt-4
                    rounded-[calc(1.5rem-1px)]
                    border-2
                    border-blue-900
                    bg-white
                    px-10 p-12
                    dark:bg-gray-900">
                <div>
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Change Password
                    </h1>
                </div>

                <div className="mt-8 space-y-6">
                    <div className="space-y-6">
                        <input className={`
                                w-full
                                bg-transparent
                                text-gray-600
                                dark:text-white
                                rounded-md
                                border
                                px-3
                                py-2
                                text-sm
                                placeholder-gray-600
                                invalid:border-red-500
                                dark:placeholder-gray-300
                                ${errorType === "OldPassword" ? "border-red-500" : "dark:border-gray-700 border-gray-300"}
                                `}

                               type="password"
                               value={oldPassword}
                               onChange={handleOldPasswordChangeEvent}
                               placeholder="Old password"
                               maxLength={100}
                        />

                        <input className={`
                                w-full
                                bg-transparent
                                text-gray-600
                                dark:text-white
                                rounded-md
                                border
                                px-3
                                py-2
                                text-sm
                                placeholder-gray-600
                                invalid:border-red-500
                                dark:placeholder-gray-300
                                ${errorType === "NewPassword" || errorType === "BothPassword" ? "border-red-500" : "dark:border-gray-700 border-gray-300"}
                                `}

                               type="password"
                               value={newPassword}
                               onChange={handleNewPasswordChangeEvent}
                               placeholder="New password"
                               maxLength={100}
                        />

                        <input className={`
                                w-full
                                bg-transparent
                                text-gray-600
                                dark:text-white
                                rounded-md
                                border
                                px-3
                                py-2
                                text-sm
                                placeholder-gray-600
                                invalid:border-red-500
                                dark:placeholder-gray-300
                                ${errorType === "BothPassword" ? "border-red-500" : "dark:border-gray-700 border-gray-300"}
                                `}

                               type="password"
                               value={newPasswordConfirmation}
                               onChange={handleNewPasswordConfirmationChangeEvent}
                               placeholder="Repeat new password"
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
                            <p>{errorMessage}</p>
                        </div>
                    )}

                    {loading && <div className="flex justify-center">
                        <div
                            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status">
                                <span
                                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                >Loading...</span
                                >
                        </div>
                    </div>}

                    <button
                        onClick={handleSubmit}
                        className="
                                h-12
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
                        Change password
                    </button>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className={"flex items-center"}>
                <button onClick={toggleShowPasswordChangeForm}
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
                           dark:focus:ring-blue-800"
                >
                    Change password
                </button>

                {passwordSuccess && <p>Password successfully changed!</p>}

            </div>

            {showPasswordChangeForm ? renderPasswordChangeForm() : <></>}
        </>
    )

}