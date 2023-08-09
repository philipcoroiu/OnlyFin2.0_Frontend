import EditButton from "@/app/dashboard/Tabs/EditButton";
import Tab from "@/app/dashboard/Tabs/Tab";

type Props = {
    activeStockTab: number,
    handleStockTabClick(index: number, stockId: number): void,
    userStockArray: OnlyfinUserStock[] | undefined,
    handleStockEditButtonClick?: () => void,
    isProfileDashboard?: boolean
}

export default function StockTabs(props: Props) {

    function renderStockTabs() {
        return (
            <Tab activeTab={props.activeStockTab} handleTabClick={props.handleStockTabClick} userArray={props.userStockArray}/>
        )
    }

    function renderLoadingTabs() {
        return (
            <li className={"mr-2"}>
                <div className="inline-flex space-x-2">
                    <button className="px-4 py-3 text-white bg-gray-600 rounded-lg active animate-pulse" aria-current="page">...</button>
                    <button className="px-4 py-3 text-white bg-gray-600 rounded-lg active animate-pulse" aria-current="page">...</button>
                    <button className="px-4 py-3 text-white bg-gray-600 rounded-lg active animate-pulse" aria-current="page">...</button>
                </div>
            </li>
        )
    }

    function renderEditButton() {
        if(!props.isProfileDashboard && props.handleStockEditButtonClick) {
            return(
                <EditButton handleEditButtonClick={props.handleStockEditButtonClick}></EditButton>
            )
        }

    }

    return (

            // ***********//
            // STOCK TABS //
            // ***********//
        <ul
            className="flex
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


            {props.userStockArray ? renderStockTabs() : renderLoadingTabs()}

            {
                renderEditButton()
            }


        </ul>
)
}