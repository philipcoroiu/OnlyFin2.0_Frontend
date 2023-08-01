type Props = {
    menuItems: string[],
    dropdownButtonIsClicked: boolean,
    handleDropdownClick(): void,
    handleSearchInput(searchQuery: string): void
}

export default function SearchDropDownMenu(props: Props) {

    return (
        <div className="flex justify-center">

                <div className="flex w-full max-w-xl mt-12 m-4
                shadow-xl shadow-gray-600/[0.3] rounded-lg
                dark:shadow-none

                ">
                    {/*<label htmlFor="search-dropdown"
                           className="mb-2
                           text-sm
                           font-medium
                           text-gray-900
                           sr-only
                           dark:text-white">Your Email</label>*/}

                    <button
                        onClick={props.handleDropdownClick}
                        id="dropdown-button"
                        data-dropdown-toggle="dropdown"
                        className="flex-shrink-0
                            z-10
                            inline-flex
                            items-center
                            py-2.5
                            px-4
                            text-sm
                            font-medium
                            text-center
                            text-gray-900
                            bg-gray-100
                            border
                            border-blue-700/[0.7]
                            rounded-l-lg
                            hover:bg-gray-200
                            focus:ring-4
                            focus:outline-none
                            focus:ring-gray-100
                            dark:bg-gray-700/[0.7]
                            dark:hover:bg-gray-600
                            dark:focus:ring-gray-700
                            dark:text-white
                            dark:border-gray-600"

                        type="button">
                        <span className="
                        hidden
                        xsm:block
                        "
                        >Users</span>

                        <svg aria-hidden="true" className="w-4 h-7 ml-1"
                             fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                  clipRule="evenodd"></path>
                        </svg>

                    </button>

                    <div id="dropdown"
                         className={`z-10 ${props.dropdownButtonIsClicked ? "" : "hidden"} origin-top-right absolute mt-12 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                            {props.menuItems.map((name:string, index:number) => (
                                <li key={index}>
                                    <button type="button"
                                            className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{name}
                                    </button>
                                </li>

                            ))}

                        </ul>
                    </div>

                    <div className="w-full flex">
                        <input type="search" onChange={(event) => props.handleSearchInput(event.target.value)}
                               id="search-dropdown"
                               className="block
                               outline-none
                               p-2.5
                               h-full
                               w-full
                               text-sm
                               text-gray-900
                               bg-gray-50
                               border
                               border-l-0
                               border-blue-700/[0.7]
                               focus:ring-blue-500
                               focus:border-blue-500
                               dark:bg-gray-700/[0.5]
                               dark:border-l-gray-700
                               dark:border-gray-600
                               dark:placeholder-gray-400
                               dark:text-white
                               dark:focus:border-blue-500
                               "
                               placeholder="Explore..." required/>

                    </div>
                    <button type="submit"
                            className=" p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg aria-hidden="true" className="w-5 h-7" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>

        </div>
    )
}