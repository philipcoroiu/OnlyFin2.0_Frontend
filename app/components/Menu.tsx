import Link from "next/link";

export default function Menu(props: any) {
    const menuItems: string[] = ["Dashboard", "Studio", "Explore", "Settings"]

    return (
        <div
            className={` ${props.toggleHamburgerMenu ? "" : "hidden"} justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {menuItems.map((name: string) => (
                    <li key={name}>
                        <Link href={name === "Home" ? "/" : "/" + name.toLowerCase()}
                           className="
                           block
                           py-2
                           pr-4
                           pl-3
                           text-gray-700
                           border-b-2
                           border-blue-700/[0.3]
                           hover:bg-gray-50
                           lg:hover:bg-transparent
                           lg:border-0
                           lg:hover:text-blue-700
                           lg:p-0 dark:text-gray-400
                           lg:dark:hover:text-white
                           dark:hover:bg-gray-700
                           dark:hover:text-white
                           lg:dark:hover:bg-transparent
                           dark:border-gray-700"
                              onClick={() => {props.setToggleHamburgerMenu(false)}}
                        >
                            {name}
                        </Link>
                    </li>
                ))}

            </ul>
        </div>
    )
}