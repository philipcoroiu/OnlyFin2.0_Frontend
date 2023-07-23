"use client"

export default function CategoryDropdownMenu(props : any) {
    return(
        <div id="dropdownDotsHorizontal"
             className={`
             absolute
             z-10
             bg-white
             divide-y
             divide-gray-200
             rounded-lg
             shadow
             w-44
             dark:bg-gray-500
             dark:divide-gray-600
             ${props.dropdownMenuIsActive ? "" : "hidden"}`}
        >

            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200 flex flex-col items-center" aria-labelledby="dropdownMenuIconHorizontalButton">
                <li className="my-2">
                    <button className="block flex-grow px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Add</button>
                </li>
                <li className="my-2">
                    <button className="block flex-grow px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</button>
                </li>
                <li className="my-2">
                    <button className="block flex-grow px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Change Name</button>
                </li>
            </ul>

        </div>
    )
}