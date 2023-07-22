"use client"

import {useState} from "react";
import PrimaryStockModal from "@/app/dashboard/Tabs/StockTabs/modals/PrimaryStockModal";
import AddExistingStockModal from "@/app/dashboard/Tabs/StockTabs/modals/AddExistingStockModal";
import ChangeCategoryNameModal from "@/app/dashboard/Tabs/CategoryTabs/modals/ChangeCategoryNameModal";
import AddCustomStockModal from "@/app/dashboard/Tabs/StockTabs/modals/AddCustomStockModal";

export default function StockEditModal(props: any) {

    const [typeOfModalActive, setTypeOfModalActive] = useState("PRIMARY MODAL");

    function handleAddExistingStockButtonPress() {
        setTypeOfModalActive("ADD EXISTING STOCK MODAL")
    }

    function handleAddCustomStockButtonPress() {
        console.log("Pressed 'Add custom stock' button")
        setTypeOfModalActive("ADD CUSTOM STOCK MODAL")
    }

    function handleSecondaryModalExitButtonPress() {
        setTypeOfModalActive("PRIMARY MODAL")
        props.handleStockEditButtonClick
    }

    return (
        <>
            {
                typeOfModalActive === "PRIMARY MODAL" ? (
                    <PrimaryStockModal
                        stockEditButtonIsActive={props.stockEditButtonIsActive}
                        handleAddStockButtonPress={handleAddExistingStockButtonPress}
                        handleStockEditButtonClick={props.handleStockEditButtonClick}
                        handleRemoveSelectedStock={props.handleRemoveSelectedStock}
                        handleAddCustomStockModalButtonPress={handleAddCustomStockButtonPress}
                    />
                ) : typeOfModalActive === "ADD EXISTING STOCK MODAL" ? (
                    <AddExistingStockModal
                        stockEditButtonIsActive={props.stockEditButtonIsActive}
                        handleExitButtonClick={handleSecondaryModalExitButtonPress}
                        handleAddStockModalClick={props.handleAddStockModalClick}
                    />
                ) : typeOfModalActive === "ADD CUSTOM STOCK MODAL" ? (
                    <AddCustomStockModal
                        stockEditButtonIsActive={props.stockEditButtonIsActive}
                        handleExitButtonClick={handleSecondaryModalExitButtonPress}
                        //handleChangeCategoryNameModalClick={props.handleChangeCategoryNameModalClick}
                    />
                ) : (
                    <div></div>
                )
            }

        </>
    )
}