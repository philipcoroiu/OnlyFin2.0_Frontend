import CategoryTabs from "./CategoryTabs/CategoryTabs"
import StockTabs from "./StockTabs/StockTabs"
import React from "react";

type Props = {
    activeStockTab: number,
    userStockArray: OnlyfinUserStock[] | undefined,
    userCategoryArray: OnlyfinUserCategoryTab[] | undefined,
    activeCategoryTab: number,
    handleStockTabClick(index: number, stockId: number): void,
    handleCategoryTabClick(index: number, categoryId: number): void,
    handleStockEditButtonClick?: () => void,
    handleCategoryEditButtonClick?: () => void,
    initialUserStockId: number,
    isProfileDashboard?: boolean
}

export default function TabsContainer(props: Props) {

    return (
        <>
            <div className={"rounded-xl bg-white dark:bg-gray-800 dark:border-0 border border-blue-900 p-4 mb-4"}>

            <h3 className={"font-bold text-xl my-3 mt-0"}
            >Stock</h3>

            <StockTabs
                activeStockTab={props.activeStockTab}
                handleStockTabClick={props.handleStockTabClick}
                userStockArray={props.userStockArray}
                handleStockEditButtonClick={props.handleStockEditButtonClick}
                isProfileDashboard={props.isProfileDashboard}
            />
            </div>

            <div className={"rounded-xl bg-white dark:bg-gray-800 dark:border-0 border border-blue-900 p-4 my-6"}>
                <h3 className={"font-bold text-xl my-3 mt-0"}
                >Category</h3>

                <CategoryTabs
                    activeCategoryTab={props.activeCategoryTab}
                    handleCategoryTabClick={props.handleCategoryTabClick}
                    userCategoryArray={props.userCategoryArray}
                    handleCategoryEditButtonClick={props.handleCategoryEditButtonClick}
                    isProfileDashboard={props.isProfileDashboard}
                />
            </div>
        </>
    )
}