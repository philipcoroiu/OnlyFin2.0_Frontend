import {useState} from "react";
import PrimaryStockModal from "@/app/dashboard/Tabs/StockTabs/modals/PrimaryStockModal";
import AddExistingStockModal from "@/app/dashboard/Tabs/StockTabs/modals/AddExistingStockModal";
import AddCustomStockModal from "@/app/dashboard/Tabs/StockTabs/modals/AddCustomStockModal";

type Props = {
    stockEditButtonIsActive: boolean,
    handleStockEditButtonClick(): void,
    handleRemoveSelectedStock(): void,
    handleAddExistingStock(selectedStockId: number): void
}

enum StockModal {
    PRIMARY,
    EXISTING_STOCK,
    CUSTOM_STOCK,
}

export default function StockEditModal(props: Props) {

    const [typeOfModalActive, setTypeOfModalActive] = useState<StockModal>(StockModal.PRIMARY);

    function handleAddExistingStockButtonPress() {
        setTypeOfModalActive(StockModal.EXISTING_STOCK)
    }

    function handleAddCustomStockButtonPress() {
        console.log("Pressed 'Add custom stock' button")
        setTypeOfModalActive(StockModal.CUSTOM_STOCK)
    }

    function handleSecondaryModalExitButtonPress() {
        setTypeOfModalActive(StockModal.PRIMARY)
        props.handleStockEditButtonClick()
    }

    //TODO: Remove other functions and only use this function to render modal
    function renderActiveModal() {
        switch (typeOfModalActive) {
            case StockModal.PRIMARY:
                return (
                    <PrimaryStockModal
                        stockEditButtonIsActive={props.stockEditButtonIsActive}
                        handleAddStockButtonPress={handleAddExistingStockButtonPress}
                        handleStockEditButtonClick={props.handleStockEditButtonClick}
                        handleRemoveSelectedStock={props.handleRemoveSelectedStock}
                        handleAddCustomStockModalButtonPress={handleAddCustomStockButtonPress}
                    />
                )
            case StockModal.EXISTING_STOCK:
                return (
                    <AddExistingStockModal
                        stockEditButtonIsActive={props.stockEditButtonIsActive}
                        handleExitButtonClick={handleSecondaryModalExitButtonPress}
                        handleAddExistingStock={props.handleAddExistingStock}
                    />
                )
            case StockModal.CUSTOM_STOCK:
                return (
                    <AddCustomStockModal
                        stockEditButtonIsActive={props.stockEditButtonIsActive}
                        handleExitButtonClick={handleSecondaryModalExitButtonPress}
                    />
                )
            default:
                return <div>Loading</div>
        }
    }

    return (
        <>
            {renderActiveModal()}
        </>
    )
}