import {useState} from "react";
import PrimaryCategoryModal from "@/app/dashboard/Tabs/CategoryTabs/modals/PrimaryCategoryModal";
import AddCategoryModal from "@/app/dashboard/Tabs/CategoryTabs/modals/AddCategoryModal";
import ChangeCategoryNameModal from "@/app/dashboard/Tabs/CategoryTabs/modals/ChangeCategoryNameModal";

enum CategoryModal {
    PRIMARY,
    ADD,
    CHANGE_NAME
}

export default function CategoryEditModal(props: any) {

    const [typeOfModalActive, setTypeOfModalActive] = useState<CategoryModal>(CategoryModal.PRIMARY);

    function handleAddCategoryButtonPress() {
        setTypeOfModalActive(CategoryModal.ADD)
    }

    function handleChangeCategoryNameButtonPress() {
        console.log("Pressed 'Change Category Name' button")
        setTypeOfModalActive(CategoryModal.CHANGE_NAME)
    }

    function handleSecondaryModalExitButtonPress() {
        setTypeOfModalActive(CategoryModal.PRIMARY)
        props.handleCategoryEditButtonClick
    }

    //TODO: Remove other functions and replace with the function below
    function renderActiveModal() {
        switch (typeOfModalActive) {
            case CategoryModal.PRIMARY:
                return (
                    <PrimaryCategoryModal
                        categoryEditButtonIsActive={props.categoryEditButtonIsActive}
                        handleAddCategoryButtonPress={handleAddCategoryButtonPress}
                        handleCategoryEditButtonClick={props.handleCategoryEditButtonClick}
                        removeSelectedCategory={props.removeSelectedCategory}
                        handleChangeCategoryNameButtonPress={handleChangeCategoryNameButtonPress}
                    />
                )
            case CategoryModal.ADD:
                return (
                    <AddCategoryModal
                        categoryEditButtonIsActive={props.categoryEditButtonIsActive}
                        handleExitButtonClick={handleSecondaryModalExitButtonPress}
                        handleAddCategoryModalClick={props.handleAddCategoryModalClick}
                    />
                )
            case CategoryModal.CHANGE_NAME:
                return (
                    <ChangeCategoryNameModal
                        categoryEditButtonIsActive={props.categoryEditButtonIsActive}
                        handleExitButtonClick={handleSecondaryModalExitButtonPress}
                        handleChangeCategoryNameModalClick={props.handleChangeCategoryNameModalClick}
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