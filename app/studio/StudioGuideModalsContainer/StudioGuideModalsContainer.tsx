import {useEffect, useState} from "react";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import EmptyStudioModal from "@/app/studio/StudioGuideModalsContainer/EmptyStudioModal";


type Props = {

}

export default function StudioGuideModalsContainer() {

    const [userStockTabs, setUserStockTabs] = useState<OnlyfinUserStockTab[]>();


    useEffect(() => {
        ApiCalls.fetchDashboardMetadata()
            .then((response) => {
                console.log("response.data.userStockTabs[0]: ", response.data.userStockTabs[0])
                setUserStockTabs(response.data.userStockTabs)
            })
    }, [])

    function renderModal(){
        const userHasNoStocks: boolean | undefined = userStockTabs?.length === 0
        const userHasOneStock: boolean | undefined = userStockTabs?.length === 1
        let userHasNoCategoryInFirstStock: boolean |undefined

        if (userStockTabs) {
            userHasNoCategoryInFirstStock = userStockTabs[0].categories.length === 0
        }

        //Previous declarations are only for semantics – ignore
        if(userStockTabs && userHasNoStocks) {
            return <EmptyStudioModal/>
        } else if(userStockTabs && userHasOneStock && userHasNoCategoryInFirstStock) {
            return <EmptyStudioModal/>
        }
    }


    return(
        <>
            {renderModal()}
        </>
    )
}