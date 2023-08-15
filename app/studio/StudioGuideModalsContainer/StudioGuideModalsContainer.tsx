import {useEffect, useState} from "react";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import EmptyStudioModal from "@/app/studio/StudioGuideModalsContainer/EmptyStudioModal";
import MissingCategoryModal from "@/app/studio/StudioGuideModalsContainer/MissingCategoryModal";


type Props = {

}

export default function StudioGuideModalsContainer() {

    const [userStockTabs, setUserStockTabs] = useState<OnlyfinUserStockTab[]>();


    useEffect(() => {
        ApiCalls.fetchDashboardMetadata()
            .then((response) => {
                //console.log("response.data.userStockTabs[0]: ", response.data.userStockTabs[0])
                setUserStockTabs(response.data.userStockTabs)
            })
    }, [])

    function renderModal(){
        const userHasNoStocks: boolean | undefined = userStockTabs?.length === 0
        const userHasOneStock: boolean | undefined = userStockTabs?.length === 1
        let userHasNoCategoryInFirstStock: boolean |undefined

        let userHasNoCategories: boolean = true

        if (userStockTabs) {
            //userHasNoCategoryInFirstStock = userStockTabs[0].categories.length === 0
        }

        console.log("userStockTabs: ", userStockTabs)

        userStockTabs?.map((stock) => {
            if(stock.categories.length > 0) {
                userHasNoCategories = false
            }
        })

        //Previous declarations are only for semantics – ignore
        if(userStockTabs && userHasNoStocks) {
            return <EmptyStudioModal/>
        } else if(userStockTabs && userHasNoCategories) {
            //TODO: Should say: Category is needed
            return <MissingCategoryModal/>
        }
    }


    return(
        <>
            {renderModal()}
        </>
    )
}