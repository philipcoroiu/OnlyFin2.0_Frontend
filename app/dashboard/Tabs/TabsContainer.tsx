import CategoryTabs from "./CategoryTabs/CategoryTabs"
import StockTabs from "./StockTabs/StockTabs"

export default function TabsContainer(props : any) {

    return (
        <div>

            <p>Stocks</p>
            <StockTabs
                activeStockTab={props.activeStockTab}
                handleStockTabClick={props.handleStockTabClick}
                userStockArray={props.userStockArray}
                handleStockEditButtonClick={props.handleStockEditButtonClick}
            />

            <p>Categories</p>
            <CategoryTabs
                activeCategoryTab={props.activeCategoryTab}
                handleCategoryTabClick={props.handleCategoryTabClick}
                userCategoryArray={props.userCategoryArray}
                handleCategoryEditButtonClick={props.handleCategoryEditButtonClick}
            />

        </div>
    )
}