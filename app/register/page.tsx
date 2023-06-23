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
                window.location.href = '/Login/';
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
        justify-center
        mx-[5%]
        mt-5
        dark:bg-gray-800
        rounded-lg
        p-3"
        >
            <form onSubmit={handleSubmit} className="">
                <div className="
                flex
                flex-col
                justify-center">
                    <h1 className="
                    text-3xl
                    font-bold
                    text-center"
                    >Register</h1>
                </div>
                <div className="
                flex
                flex-col
                m-2"
                >
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder="Username"
                        maxLength={50}
                        className="
                        m-2
                        p-2
                        rounded-md"
                    />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
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
                    Register
                </button>
                <Link href={"../Login"}>
                    Already a user? Login here.
                </Link>
            </form>
        </div>
    )
}