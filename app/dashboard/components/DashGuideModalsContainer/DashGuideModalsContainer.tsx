import EmptyDashboardModal from "@/app/dashboard/components/DashGuideModalsContainer/EmptyDashboardModal";
import MissingCategoryModal from "@/app/dashboard/components/DashGuideModalsContainer/MissingCategoryModal";


type Props = {
    userStockArray?: OnlyfinUserStock[],
    userCategoryArray?: OnlyfinUserCategoryTab[]
}

export default function DashGuideModalsContainer(props : Props) {

    function renderModal() {
        const userIsMissingStock: boolean = props.userStockArray?.length === 0;
        const userIsMissingCategory: boolean = props.userCategoryArray?.length === 0;

        if(props.userStockArray && userIsMissingStock) {
            return <EmptyDashboardModal/>
        }

        if(props.userCategoryArray && userIsMissingCategory) {
            return <MissingCategoryModal/>
        }
    }

    return(
        <>
            {renderModal()}
        </>
    )
}