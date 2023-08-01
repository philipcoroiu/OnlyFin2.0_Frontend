type Props = { dropdownMenuIsActive: boolean }

export default function TableDropdownMenu(props : Props) {
    return (
        <div id="dropdownLeft"
             className={`
             fixed
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

            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                    <a href="#"
                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Add</a>
                </li>
                <li>
                    <a href="#"
                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                </li>
                <li>
                    <a href="#"
                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Change Name</a>
                </li>
            </ul>
        </div>
    )
}