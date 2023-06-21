"use client"
import React, {useState} from "react";
import axios from 'axios';
import Link from "next/link";


export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const searchParams = new URLSearchParams(location.search);
    const redirect = searchParams.get("Redirect") || null;

    const [showErrorMessage, setShowErrorMessage] = React.useState(false)

    function handleUsernameChange(event: any) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event: any) {
        setPassword(event.target.value);
    }



    function handleSubmit(event: any) {
        event.preventDefault();
        axios.post(
            process.env.REACT_APP_BACKEND_URL + '/plz',
            `username=${username}&password=${password}`,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                withCredentials: true,
            }
        )
            .then(() => {
                if (redirect == null) {
                    document.location.href = '../Feed'
                } else {
                    document.location.href = `../${redirect}`
                }

            })
            .catch(() => {
                displayErrorMessage()
            });
        console.log(redirect)
    }

    function displayErrorMessage() {

        console.log(username)

        /* sets the showErrorMessage to true to show the error messages */
        setShowErrorMessage(true);

    }

    return (
        <div className="flex
        justify-center
        mx-[5%]
        mt-5
        dark:bg-gray-800
        rounded-lg
        p-3"
        >
            <form
                onSubmit={handleSubmit}
                className="flex flex-col">

                <div className="flex
                flex-col
                justify-center
                my-2"
                >

                    <h1 className="
                    text-3xl
                    font-bold
                    text-center
                    mb-4"
                    >Log in</h1>

                    <p>Welcome to OnlyFin, please put your credentials below to start using the website</p>

                </div>
                <div className="
                flex
                flex-col"
                >
                    <input
                        type="email"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Email"
                        maxLength={50}
                        className="
                        my-2
                        p-2
                        rounded-md"
                    />
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="Password"
                        maxLength={100}
                        className="
                        my-2
                        p-2
                        rounded-md"
                    />
                </div>

                {showErrorMessage && (
                    <div className="
                    text-center
                    text-red-500
                    font-bold
                    m-2
                    text-xl
                    font-mono"
                    >
                        <p>INCORRECT USERNAME OR PASSWORD!</p>
                    </div>
                )}

                <div className="
                items-center
                flex
                flex-col"
                >
                <button
                    type="submit"
                    className="
                    text-white
                    bg-blue-700
                    hover:bg-blue-800
                    focus:ring-4
                    focus:ring-blue-300
                    font-medium
                    rounded-lg
                    text-lg
                    px-4
                    lg:px-5
                    py-2
                    lg:py-2.5
                    m-2
                    dark:bg-blue-600
                    dark:hover:bg-blue-700
                    focus:outline-none
                    dark:focus:ring-blue-800
                    w-fit"
                >
                    Log in
                </button>

                <Link href={"../register"}
                className="
                m-2
                text-blue-800"
                >
                    Not a user? Register here.
                </Link>

                </div>
            </form>

        </div>
    );
}
