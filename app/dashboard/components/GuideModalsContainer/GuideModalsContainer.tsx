import EmptyDashboardModal from "@/app/dashboard/components/GuideModalsContainer/EmptyDashboardModal";
import MissingCategoryModal from "@/app/dashboard/components/GuideModalsContainer/MissingCategoryModal";


type Props = {
    userStockArray?: OnlyfinUserStock[],
    userCategoryArray?: OnlyfinUserCategoryTab[]
}

export default function GuideModalsContainer(props : Props) {

    function renderModal() {
        if(props.userStockArray && props.userStockArray.length === 0) {
            return <EmptyDashboardModal/>
        }

        if(props.userCategoryArray && props.userCategoryArray.length === 0) {
            return <MissingCategoryModal/>
        }
    }

    return(
        <>
            {renderModal()}
        </>
    )
}