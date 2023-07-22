"use client"

import {ApiCalls} from "@/app/utilities/ApiCalls";
import {useState} from "react";
import PrimaryStockModal from "@/app/dashboard/Tabs/StockTabs/modals/PrimaryStockModal";
import AddExistingStockModal from "@/app/dashboard/Tabs/StockTabs/modals/AddExistingStockModal";
import ChangeCategoryNameModal from "@/app/dashboard/Tabs/CategoryTabs/modals/ChangeCategoryNameModal";

export default function StockEditModal(props: any) {

    const [typeOfModalActive, setTypeOfModalActive] = useState("PRIMARY MODAL");

    function handleAddStockButtonPress() {
        setTypeOfModalActive("ADD STOCK MODAL")
    }

    function handleChangeCategoryNameButtonPress() {
        console.log("Pressed 'Change Category Name' button")
        setTypeOfModalActive("CHANGE CATEGORY NAME MODAL")
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
                        handleAddStockButtonPress={handleAddStockButtonPress}
                        handleStockEditButtonClick={props.handleStockEditButtonClick}
                        //removeSelectedStock={props.removeSelectedCategory}
                        //handleChangeCategoryNameButtonPress={handleChangeCategoryNameButtonPress}
                    />
                ) : typeOfModalActive === "ADD STOCK MODAL" ? (
                    <AddExistingStockModal
                        stockEditButtonIsActive={props.stockEditButtonIsActive}
                        handleExitButtonClick={handleSecondaryModalExitButtonPress}
                        handleAddStockModalClick={props.handleAddStockModalClick}
                    />
                ) : typeOfModalActive === "CHANGE CATEGORY NAME MODAL" ? (
                    <ChangeCategoryNameModal
                        categoryEditButtonIsActive={props.categoryEditButtonIsActive}
                        handleExitButtonClick={handleSecondaryModalExitButtonPress}
                        handleChangeCategoryNameModalClick={props.handleChangeCategoryNameModalClick}
                    />
                ) : (
                    <div></div>
                )
            }

        </>
    )
}