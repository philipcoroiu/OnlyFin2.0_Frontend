import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/app/components/header/Header";
import BgBlurLower from "@/app/components/BgBlurLower";
import BgBlurUpper from "@/app/components/BgBlurUpper";

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

      <BgBlurUpper></BgBlurUpper>

      <main>{children}</main>

      <BgBlurLower></BgBlurLower>

      </body>
    </html>
  )
}