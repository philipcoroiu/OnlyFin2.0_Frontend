"use client"

import {ApiCalls} from "@/app/utilities/ApiCalls";
import {useState} from "react";
import PrimaryModal from "@/app/dashboard/Tabs/CategoryTabs/modals/PrimaryModal";
import AddCategoryModal from "@/app/dashboard/Tabs/CategoryTabs/modals/AddCategoryModal";

export default function CategoryEditModal(props : any) {

    const [typeOfModalActive, setTypeOfModalActive] = useState("PRIMARY MODAL");

    function handleAddCategoryButtonPress() {
        console.log("You pressed add category button")
        setTypeOfModalActive("ADD CATEGORY MODAL")
    }

    function handleSecondaryModalExitButtonPress() {
        setTypeOfModalActive("PRIMARY MODAL")
        props.handleCategoryEditButtonClick
    }

    return(
        <>
            {typeOfModalActive === "PRIMARY MODAL" ?
                (<PrimaryModal
                    categoryEditButtonIsActive={props.categoryEditButtonIsActive}
                    handleAddCategoryButtonPress={handleAddCategoryButtonPress}
                    handleCategoryEditButtonClick={props.handleCategoryEditButtonClick}
                    removeSelectedCategory={props.removeSelectedCategory}
                />)
            : typeOfModalActive === "ADD CATEGORY MODAL" ?
                (<AddCategoryModal
                    categoryEditButtonIsActive={props.categoryEditButtonIsActive}
                    handleExitButtonClick={handleSecondaryModalExitButtonPress}
                    handleAddCategoryModalClick={props.handleAddCategoryModalClick}
                />)
            : (<div>Insert</div>)
            }
        </>
    )
}