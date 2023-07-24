'use client'

import {useState} from "react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {ApiCalls} from "@/app/utilities/ApiCalls";

export default function register() {
    const router = useRouter()

    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [repeatPassword, setRepeatPassword] = useState<string>('')

    // Error handling:
    const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [errorType, setErrorType] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    function handleSubmit(event: any) {
        event.preventDefault()

        if (username.length === 0) {
            setShowErrorMessage(true);
            setErrorMessage("Missing username");
            setErrorType('username');
            return null;
        }
        if (email.length === 0) {
            setShowErrorMessage(true);
            setErrorMessage("Missing email");
            setErrorType('email');
            return null;
        }

        if (!checkPassword()) {
            setErrorType('password');
            return null;
        }

        setShowErrorMessage(false);
        setErrorMessage('');
        setErrorType('');

        setLoading(true);
        ApiCalls.registerNewUser(email, username, password)
            .then(response => {
                router.push("/login/")
            })
            .catch(error => {
                setShowErrorMessage(true);
                if (error.response){
                    switch (error.response.data){
                        case "Username is already taken!" : setErrorType('username');
                            break;
                        case "Email is already taken!" : setErrorType('email');
                            break;
                        default: setErrorType('');
                    }
                    setErrorMessage(error.response.data);
                    setLoading(false);
                }
            });
    }

    function checkPassword() {
        // Check if password is longer than 8 characters.

        if (password.length < 8) {
            setShowErrorMessage(true);
            setErrorMessage("Password must contain at least 8 characters");
            return null;
        }

        if (password !== repeatPassword) {
            setShowErrorMessage(true);
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

    //TODO: change dark mode text input to be a readable color
    return (
        <div className="
        mx-auto
        max-w-2xl
        py-32
        sm:py-48
        lg:py-56
        p-12
        ">
            <form
                onSubmit={handleSubmit}>

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

                    <div className="mt-8 space-y-6">
                        <div className="space-y-6">

                            {/*Username*/}

                            <input className={`w-full
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
                                ${errorType === "username" ? "border-red-500" : "dark:border-gray-700 border-gray-300"}
                                `}

                                   type="text"
                                   id="username"
                                   name="username"
                                   value={username}
                                   onChange={handleUsernameChange}
                                   placeholder="Username"
                                   maxLength={50}
                            />

                            {/*Email*/}

                            <input className={`w-full
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
                                ${errorType === "email" ? "border-red-500" : "dark:border-gray-700 border-gray-300"}
                                `}
                                   type="email"
                                   id="email"
                                   name="email"
                                   value={email}
                                   onChange={handleEmailChange}
                                   placeholder="Email"
                                   maxLength={50}
                            />

                            {/*Password*/}

                            <input className={`w-full
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
                                ${errorType === "password" ? "border-red-500" : "dark:border-gray-700 border-gray-300"}
                                `}

                                   type="password"
                                   id="password"
                                   name="password"
                                   value={password}
                                   onChange={handlePasswordChange}
                                   placeholder="Password"
                                   maxLength={100}
                            />


                            {/*Repeat Password*/}

                            <input className={`w-full
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
                                ${errorType === "password" ? "border-red-500" : "dark:border-gray-700 border-gray-300"}
                                `}

                                   type="password"
                                   id="repeatPassword"
                                   name="repeatPassword"
                                   value={repeatPassword}
                                   onChange={handleRepeatPasswordChange}
                                   placeholder="Repeat Password"
                                   maxLength={100}
                            />
                        </div>

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
                    </div>
                </div>
            </form>
        </div>
    )
}