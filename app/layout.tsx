import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/app/components/header/Header";
import BgBlurLower from "@/app/components/BgBlurLower";
import BgBlurUpper from "@/app/components/BgBlurUpper";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Onlyfin',
    description: 'Onlyfin',
    other: {
        viewport: "width=device-width, initial-scale=1, maximum-scale=1"
    }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    return (
        <html lang="en">
            <body className={inter.className}>
                <Header/>
                <BgBlurUpper/>
                <main>{children}</main>
                <BgBlurLower/>
            </body>
        </html>
    )
}