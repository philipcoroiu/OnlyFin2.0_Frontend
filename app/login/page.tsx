"use client"
import React, {useState} from "react";
import axios from 'axios';
import Link from "next/link";


export default function Login() {
    document.title = "Login"

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

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
        setError(null);
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
            .catch((error) => {
                setError(error.response.data.error);
                showErrorMessageForDuration(15000)
            });
        console.log(redirect)
    }

    function showErrorMessageForDuration(duration: any) {

        console.log(username)

        /* sets the showErrorMessage to true to show the error messages */
        setShowErrorMessage(true);

        /* sets timeout for the duration input and then sets the showErrorMessage to false */
        setTimeout(() => {
            setShowErrorMessage(false);
        }, duration);
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
            <form onSubmit={handleSubmit} className="">
                <div className="flex
                flex-col
                justify-center">

                    <h1 className="
                    text-3xl
                    font-bold
                    text-center"
                    >Log in</h1>

                    <p>Welcome to OnlyFin, please put your credentials below to start using the website</p>
                </div>
                <div className="
                flex
                flex-col
                m-2"
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
                        m-2
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
                        m-2
                        p-2
                        rounded-md"

                    />
                </div>
                {error && <div className="">{error}</div>}
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
                    text-sm px-4
                    lg:px-5 py-2
                    lg:py-2.5
                    mr-2
                    dark:bg-blue-600
                    dark:hover:bg-blue-700
                    focus:outline-none
                    dark:focus:ring-blue-800"
                >
                    Log in
                </button>
                <Link href={"../Register"}>
                    Not a user? Register here.
                </Link>
            </form>
            {showErrorMessage && (
                <div className="">
                    <p>Please check if your username or password is correct</p>
                </div>
            )}
        </div>
    );
}
