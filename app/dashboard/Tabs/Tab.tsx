type Props = {
    activeTab: number,
    handleTabClick(index: number, tabId: number): void,
    userArray: any,
}

export default function Tab(props: Props) {
   /* Explanation how it works:
   tab.userCategoryId || tab.id
   The left side of the "||" is when it's a category tab, the right side is for stock tabs
   */
    function renderEditButton() {
        return (
            props.userArray?.map((tab : any, index: number) => (

                <li key={tab.userCategoryId || tab.id} className="mr-2">
                    <button
                        className={`${props.activeTab === index ?
                            "inline-block px-4 py-3 text-white bg-blue-600 font-bold rounded-lg active"
                            :
                            "inline-block px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-200 text-black dark:text-white dark:hover:bg-gray-600 dark:bg-gray-700 dark:hover:text-white "}`}

                        onClick={() => props.handleTabClick(index, tab.userCategoryId || tab.id)}
                        aria-current="page">{tab.categoryName || tab.stock.name}
                    </button>
                </li>

            ))
        )
    }

    return (
        renderEditButton()
    )
}