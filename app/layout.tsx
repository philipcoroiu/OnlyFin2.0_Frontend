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

      {/*Used for getting the background coloring*/}
      <div
          className="
                    absolute
                    inset-x-0 -top-40 -z-10
                    transform-gpu
                    overflow-hidden
                    blur-3xl
                    sm:-top-80"
          aria-hidden="true"
      >
          <div
              className="relative
                        left-[calc(50%-11rem)]
                        aspect-[1155/678] w-[36.125rem]
                        -translate-x-1/2 rotate-[30deg]
                        bg-gradient-to-tr
                        from-[#ff0000]
                        to-[#00ff00]
                        opacity-30 sm:left-[calc(50%-30rem)]
                        sm:w-[72.1875rem]"
              style={{
                  clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
          />
      </div>

      {children}

      {/*Used for getting the background coloring*/}
      <div
          className="
                    absolute
                    inset-x-0
                    top-[calc(100%-13rem)] -z-10
                    transform-gpu
                    overflow-hidden
                    blur-3xl
                    sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
      >
          <div
              className="
                        relative left-[calc(50%+3rem)]
                        aspect-[1155/678]
                        w-[36.125rem]
                        -translate-x-1/2
                        bg-gradient-to-tr from-[#ff0000]
                        to-[#00ff00]
                        opacity-30
                        sm:left-[calc(50%+36rem)]
                        sm:w-[72.1875rem]"
              style={{
                  clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
          />
      </div>

      </body>
    </html>
  )
}
