import CategoryTabs from "./CategoryTabs/CategoryTabs"
import StockTabs from "./StockTabs/StockTabs"
import React from "react";

export default function TabsContainer(props: {
    activeStockTab: number,
    userStockArray: OnlyfinUserStock[] | undefined,
    userCategoryArray: OnlyfinUserCategoryTab[] | undefined,
    activeCategoryTab: number,
    handleStockTabClick(index: number, stockId: number): void,
    handleCategoryTabClick(index: number, categoryId: number): void,
    handleStockEditButtonClick(): void,
    handleCategoryEditButtonClick(): void,
    initialUserStockId: number
}) {

    return (
        <div>
            <div className={"rounded-xl bg-gray-900 p-4 mb-4"}>

            <h3 className={"font-bold text-xl"}
            >Stocks</h3>

            <StockTabs
                activeStockTab={props.activeStockTab}
                handleStockTabClick={props.handleStockTabClick}
                userStockArray={props.userStockArray}
                handleStockEditButtonClick={props.handleStockEditButtonClick}
            />
            </div>

            <div className={"rounded-xl bg-gray-900 p-4 my-6"}>
                <h3 className={"font-bold text-xl"}
                >Category</h3>

                <CategoryTabs
                    activeCategoryTab={props.activeCategoryTab}
                    handleCategoryTabClick={props.handleCategoryTabClick}
                    userCategoryArray={props.userCategoryArray}
                    handleCategoryEditButtonClick={props.handleCategoryEditButtonClick}
                />
            </div>
        </div>
    )
}