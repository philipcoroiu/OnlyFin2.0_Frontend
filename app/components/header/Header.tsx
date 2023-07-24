"use client"

import {useEffect, useState} from "react";
import Menu from "@/app/components/Menu";
import LoggedOutButtons from "@/app/components/header/headerComponents/LoggedOutButtons";
import LoggedInButtons from "@/app/components/header/headerComponents/LoggedInButtons";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import Link from "next/link";

export default function Header() {

    const [toggleHamburgerMenu, setToggleHamburgerMenu] = useState<boolean>(false)

    const [username, setUsername] = useState<string>();

    useEffect(() => {
        ApiCalls.whoAmI()
            .then((response) => {
                if (response.status === 204) {
                    console.log("User not logged in")
                } else {
                    console.log("whoAmI response.data: ", response.data)
                    setUsername(response.data)
                }
            })
            .catch((error) => {
                console.log("[Header]: could not reach server: " + error)
            })
    }, [])

    function ToggleHamburgerMenu(){
        setToggleHamburgerMenu(oldValue => !oldValue)
    }

    return (
        <header>
            <nav className="
            px-4
            lg:px-6

            border-b-2
            border-blue-700/[0.7]

            dark:border-b-0

            py-2.5
            bg-gray-100/[0.6]
            dark:bg-gray-800/[0.6]
            "
            >
                <div className="
                flex
                flex-wrap
                justify-between
                items-center
                mx-auto
                max-w-screen-xl"
                >
                    <Link href="/" className="
                    flex
                    items-center"
                    >
                        <img src="https://flowbite.com/docs/images/logo.svg"
                             className="mr-3 h-9"
                             alt="Flowbite Logo"
                        />
                        <span
                            className="
                            hidden
                            xsm:block
                            self-center
                            text-xl
                            font-semibold
                            whitespace-nowrap
                            dark:text-white"
                        >OnlyFin</span>
                    </Link>
                    <div className="
                    flex items-center
                    lg:order-2"
                    >
                        {username ? (<LoggedInButtons username={username}/>) : (<LoggedOutButtons/>)}

                        <button onClick={ToggleHamburgerMenu}
                                data-collapse-toggle="mobile-menu-2"
                                type="button"
                                className="
                                inline-flex
                                items-center
                                p-2
                                ml-1
                                text-sm
                                text-gray-500
                                rounded-lg
                                lg:hidden
                                hover:bg-gray-100
                                focus:outline-none
                                focus:ring-2
                                focus:ring-gray-200
                                dark:text-gray-400
                                dark:hover:bg-gray-700
                                dark:focus:ring-gray-600"
                                aria-controls="mobile-menu-2"
                                aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu </span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                      clipRule="evenodd"></path>
                            </svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    {/*
                    Mobile hamburger menu
                    */}
                    <Menu toggleHamburgerMenu={toggleHamburgerMenu} setToggleHamburgerMenu={setToggleHamburgerMenu}></Menu>
                </div>
            </nav>
        </header>
    )
}