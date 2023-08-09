type Props = {
    handleEditButtonClick?: () => void,
}

export default function EditButton(props: Props) {

    function renderEditButton() {
            return (
                <li className="mr-2">
                    <button
                        type="button"
                        onClick={props.handleEditButtonClick}
                        className="inline-flex
                    items-center
                    p-2
                    text-sm
                    font-medium
                    text-center
                    bg-blue-600
                    text-white
                    rounded-lg
                    focus:outline-none
                    dark:text-white
                    dark:bg-gray-700
                    dark:hover:bg-gray-600
                    dark:focus:ring-gray-500
                    transition duration-300 ease-in-out hover:scale-110
                    "
                    >
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        </svg>

                    </button>
                </li>
            )
    }

    return (
        renderEditButton()
    )
}