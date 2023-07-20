"use client"

import Avatar from "@/app/components/Avatar";

export default function SearchProfileSkeleton() {

    return (
        <div className="animate-pulse bg-gray-50 rounded-lg p-4 dark:bg-gray-700">
            <Avatar/>
        </div>
    )
}