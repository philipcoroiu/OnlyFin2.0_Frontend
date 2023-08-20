import EditButton from "@/app/dashboard/Tabs/EditButton";
import AlertNoDismiss from "@/app/components/AlertNoDismiss";
import { AlertTypes } from "@/types/AlertTypes";
import Tab from "@/app/dashboard/Tabs/Tab";

type Props = {
    activeCategoryTab: number,
    handleCategoryTabClick(index: number, categoryId: number): void,
    userCategoryArray: OnlyfinUserCategoryTab[] | undefined,
    handleCategoryEditButtonClick?: () => void,
    readOnly?: boolean
}

export default function StockTabs(props: Props) {

    function renderCategoryTabs() {
        if (props.userCategoryArray) {
            return (
                <>
                    {props.userCategoryArray?.length > 0 ?
                        <Tab activeTab={props.activeCategoryTab} handleTabClick={props.handleCategoryTabClick}
                             tabArray={props.userCategoryArray}/>
                        :
                        <AlertNoDismiss message={"The selected tab is empty"} alertType={AlertTypes.INFO}/>
                    }
                </>
            )
        }
    }

    function renderLoadingTabs() {
        return (
            <>
                {props.activeCategoryTab !== -1 ?
                    <li className="mr-2">
                        <div className="inline-flex space-x-2">
                            <button className="px-4 py-3 text-white bg-gray-600 rounded-lg active animate-pulse" aria-current="page">...</button>
                            <button className="px-4 py-3 text-white bg-gray-600 rounded-lg active animate-pulse" aria-current="page">...</button>
                            <button className="px-4 py-3 text-white bg-gray-600 rounded-lg active animate-pulse" aria-current="page">...</button>
                        </div>
                    </li>
                    :
                    <>
                        <p className={"mr-2 text-xl"}>No stock selected</p>
                    </>
                }
            </>
        )
    }

    function renderEditButton() {
        if(!props.readOnly && props.handleCategoryEditButtonClick) {
            return(
                <EditButton handleEditButtonClick={props.handleCategoryEditButtonClick}></EditButton>
            )
        }

    }

    return (

                // **************//
                // CATEGORY TABS //
                // **************//

            <ul
                className="flex
                flex-wrap
                items-center
                whitespace-nowrap
                text-sm
                font-medium
                text-center
                text-gray-500
                dark:text-gray-400
                max-w-auto
                overflow-x-auto
                scrollbar-none">

                {props.userCategoryArray ? renderCategoryTabs() : renderLoadingTabs()}

                {
                    renderEditButton()
                }

            </ul>


    )
}