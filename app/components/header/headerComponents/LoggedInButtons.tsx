"use client"

import Avatar from "@/app/components/Avatar";

export default function LoggedInButtons() {
    return (
        <a href="/" className="flex items-center">
            <div className="mr-1">
                <Avatar/>
            </div>
            <p className="ml-2">Username</p>
        </a>
    )
}