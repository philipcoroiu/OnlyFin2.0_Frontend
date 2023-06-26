'use client'

import React, {useState} from "react";
import Link from "next/link";
import axios from "axios";

export default function register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event: any) {
        event.preventDefault()

        //TODO: change to .env variable instead of hardcoded value
        axios.post("http://localhost:8080/users/register",
            {
                email: email,
                username: username,
                password: password
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            .then(response => {
                //TODO: change this to use router instead
                window.location.href = '/login/';
            })
            .catch(error => {
                //TODO: add error handling
                console.log("[ERROR] register.handleSubmit():" + error)
            });
    }

    function handleEmailChange(event: any) {
        setEmail(event.target.value)
    }

    function handleUsernameChange(event: any) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event: any) {
        setPassword(event.target.value)
    }

    //TODO: change dark mode text input to be a readable color
    return (
        <div className="
        flex
        items-center
        justify-center
        p-12">
            <form
                onSubmit={handleSubmit}>

                <div className="
                max-w-xl
                rounded-3xl
                bg-gradient-to-b
                from-sky-300
                to-purple-500
                p-px dark:from-gray-800
                dark:to-transparent">

                    <div className="
                    rounded-[calc(1.5rem-1px)]
                    bg-white
                    px-10 p-12
                    dark:bg-gray-900">

                        <div>
                            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Register an account</h1>
                            <p className="text-sm tracking-wide text-gray-600 dark:text-gray-300"><span>Already a user? </span>
                                <Link className="text-blue-600 transition duration-200 hover:underline dark:text-blue-400" href={"../login"}>
                                    Login!
                                </Link>
                            </p>
                        </div>

                        <div className="mt-8 space-y-6">
                            <div className="space-y-6">

                                <input className="w-full
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
                                dark:placeholder-gray-300
                                "
                                       type="text"
                                       id="username"
                                       name="username"
                                       value={username}
                                       onChange={handleUsernameChange}
                                       placeholder="Username"
                                       maxLength={50}
                                />


                                <input className="w-full
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
                                dark:placeholder-gray-300
                                "
                                       type="email"
                                       id="username"
                                       name="username"
                                       value={username}
                                       onChange={handleUsernameChange}
                                       placeholder="Email"
                                       maxLength={50}
                                />

                                <input className="w-full
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
                                dark:placeholder-gray-300

                                "
                                       type="password"
                                       id="password"
                                       name="password"
                                       value={password}
                                       onChange={handlePasswordChange}
                                       placeholder="Password"
                                       maxLength={100}
                                />
                            </div>

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
                </div>
            </form>
        </div>
    )
}