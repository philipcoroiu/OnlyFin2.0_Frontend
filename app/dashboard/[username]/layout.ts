import React from "react";
import { Metadata } from "next";

export let metadata: Metadata = {
    title: `Onlyfin: dashboard`
}

export default function layout({children, params}: { children: React.ReactNode, params: { username: string } }) {
    metadata.title = `Onlyfin: ${params.username}'s dashboard`

    return children
}