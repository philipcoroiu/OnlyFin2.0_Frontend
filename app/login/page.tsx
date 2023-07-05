"use client"
import React, {useState} from "react";
import axios from 'axios';
import Link from "next/link";
import {useRouter} from "next/navigation";
import {ApiCalls} from "@/app/utilities/ApiCalls";


export default function Login() {
    const router = useRouter()

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [showErrorMessage, setShowErrorMessage] = React.useState(false)

    function handleUsernameChange(event: any) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event: any) {
        setPassword(event.target.value);
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        ApiCalls.postLoginPlz(username,password)
            .then((response) => {
                if (response){
                    window.location.href = '../dashboard'
                }else {
                    displayErrorMessage()
                }

            })
            .catch(() => {
                displayErrorMessage()
            });
    }

    /*
  *
  * event.preventDefault();
      ApiCalls.postLoginPlz(username,password)
          .then(() => {
              //router.push('../Feed')

          })
          .catch(() => {
              displayErrorMessage()
          });
  *
  * */


    function displayErrorMessage() {

        console.log(username)

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
                        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Login to your
                            account</h1>
                        <p className="text-sm tracking-wide text-gray-600 dark:text-gray-300"><span>Don't have an account? </span>
                            <Link className="text-blue-600 transition duration-200 hover:underline dark:text-blue-400"
                                  href={"../register"}>
                                Register!
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
                                dark:focus:ring-blue-800
                                ">
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}