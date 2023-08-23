'use client'

import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import InputField from "@/app/register/components/InputField";
import Turnstile, { useTurnstile } from "react-turnstile";

export default function Page() {

    const router = useRouter()

    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')
    const [turnstileToken, setTurnstileToken] = useState<string>()

    // Error handling:
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [errorType, setErrorType] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    function TurnstileWidget() {
        const turnstile = useTurnstile()
        return (
            <Turnstile
                sitekey="0x4AAAAAAAImh0f7n4mAhXgr"
                onVerify={(token) => setTurnstileToken(token)}
            />
        );
    }

    function handleSubmit(event: any) {
        event.preventDefault()

        if (username.length === 0) {
            setShowErrorMessage(true)
            setErrorMessage("Missing username")
            setErrorType('username')
            return null;
        }
        if (email.length === 0) {
            setShowErrorMessage(true)
            setErrorMessage("Missing email")
            setErrorType('email')
            return null
        }

        if (!checkPassword()) {
            setErrorType('password')
            return null
        }

        setShowErrorMessage(false)
        setErrorMessage('')
        setErrorType('')

        setLoading(true)

        ApiCalls.registerNewUser(email, username, password, turnstileToken)
            .then(() => {
                router.push("/login/")
            })
            .catch(error => {
                setShowErrorMessage(true)

                if (error.response) {
                    switch (error.response.data) {
                        case "Username is already taken!" : setErrorType('username');
                            break;
                        case "Email is already taken!" : setErrorType('email');
                            break;
                        default: setErrorType('');
                    }

                    setErrorMessage(error.response.data)
                    setLoading(false)
                }
            });
    }

    function checkPassword() {
        // Check if the password is longer than 8 characters.

        if (password.length < 8) {
            setShowErrorMessage(true)
            setErrorMessage("Password must contain at least 8 characters");
            return null;
        }

        if (password !== repeatPassword) {
            setShowErrorMessage(true)
            setErrorMessage("Password does not match");
            return null;
        }

        return true;
    }

    function handleEmailChange(event: any) {
        setEmail(event.target.value.toLowerCase())
    }

    function handleUsernameChange(event: any) {
        setUsername(event.target.value.toLowerCase())
    }

    function handlePasswordChange(event: any) {
        setPassword(event.target.value)
    }

    function handleRepeatPasswordChange(event: any) {
        setRepeatPassword(event.target.value)
    }

    return (
        <div className="
        max-w-2xl
        py-20

        mx-auto
        px-1
        xsm:px-2
        sm:px-10
        md:w-5/6
        lg:w-2/3
        ">
                <div className="
                    rounded-[calc(1.5rem-1px)]
                    border-2
                    border-blue-900
                    bg-white
                    px-10 p-12
                    dark:bg-gray-900">
                    <div>
                        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Register an account</h1>
                        <p className="text-sm tracking-wide text-gray-600 dark:text-gray-300">
                            <span>Already a user? </span>
                            <Link className="text-blue-600 transition duration-200 hover:underline dark:text-blue-400"
                                  href={"../login"}>
                                Login!
                            </Link>
                        </p>
                    </div>

                    <form className="mt-8 space-y-6 flex flex-col items-center" onSubmit={handleSubmit}>
                            {/*Username*/}

                            <InputField error={errorType} errorType={"username"} inputName={"Username"} inputValue={username} inputType={"text"} onChange={handleUsernameChange}></InputField>

                            {/*Email*/}

                            <InputField error={errorType} errorType={"email"} inputName={"Email"} inputValue={email} inputType={"email"} onChange={handleEmailChange}></InputField>

                            {/*Password*/}

                            <InputField error={errorType} errorType={"password"} inputName={"Password"} inputValue={password} inputType={"password"} onChange={handlePasswordChange}></InputField>

                            {/*Repeat Password*/}

                            <InputField error={errorType} errorType={"password"} inputName={"Repeat password"} inputValue={repeatPassword} inputType={"password"} onChange={handleRepeatPasswordChange}></InputField>

                        {/*Error message*/}

                        {showErrorMessage && (
                            <div className="
                                    text-center
                                    text-red-500
                                    font-bold
                                    font-mono"
                            >
                                <p>{errorMessage}</p>
                            </div>
                        )}

                        {/*Loading animation*/}

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

                        {TurnstileWidget()}

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
                                dark:focus:ring-blue-800
                                ">
                            Register
                        </button>
                    </form>
                </div>
        </div>
    )
}