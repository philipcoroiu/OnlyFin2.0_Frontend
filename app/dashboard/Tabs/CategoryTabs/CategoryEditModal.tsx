"use client"

import {ApiCalls} from "@/app/utilities/ApiCalls";
import {useState} from "react";
import PrimaryCategoryModal from "@/app/dashboard/Tabs/CategoryTabs/modals/PrimaryCategoryModal";
import AddCategoryModal from "@/app/dashboard/Tabs/CategoryTabs/modals/AddCategoryModal";
import ChangeCategoryNameModal from "@/app/dashboard/Tabs/CategoryTabs/modals/ChangeCategoryNameModal";

export default function CategoryEditModal(props: any) {

    const [typeOfModalActive, setTypeOfModalActive] = useState("PRIMARY MODAL");

    function handleAddCategoryButtonPress() {
        setTypeOfModalActive("ADD CATEGORY MODAL")
    }

    function handleChangeCategoryNameButtonPress() {
        console.log("Pressed 'Change Category Name' button")
        setTypeOfModalActive("CHANGE CATEGORY NAME MODAL")
    }

    function handleSecondaryModalExitButtonPress() {
        setTypeOfModalActive("PRIMARY MODAL")
        props.handleCategoryEditButtonClick
    }

    return (
        <>
            {
                typeOfModalActive === "PRIMARY MODAL" ? (
                    <PrimaryCategoryModal
                        categoryEditButtonIsActive={props.categoryEditButtonIsActive}
                        handleAddCategoryButtonPress={handleAddCategoryButtonPress}
                        handleCategoryEditButtonClick={props.handleCategoryEditButtonClick}
                        removeSelectedCategory={props.removeSelectedCategory}
                        handleChangeCategoryNameButtonPress={handleChangeCategoryNameButtonPress}
                    />
                ) : typeOfModalActive === "ADD CATEGORY MODAL" ? (
                    <AddCategoryModal
                        categoryEditButtonIsActive={props.categoryEditButtonIsActive}
                        handleExitButtonClick={handleSecondaryModalExitButtonPress}
                        handleAddCategoryModalClick={props.handleAddCategoryModalClick}
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