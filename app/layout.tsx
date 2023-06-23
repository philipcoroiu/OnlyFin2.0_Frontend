import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/app/Header";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Onlyfin',
  description: 'Onlyfin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header></Header>
      {children}
      </body>
    </html>
  )
}
