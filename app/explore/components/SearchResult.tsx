"use client"

import Avatar from "@/app/components/Avatar";
import LoadingAnimation from "@/app/components/LoadingAnimation";
import SearchProfile from "@/app/explore/components/searchProfile/SearchProfile";


export default function SearchResult(props : any) {

    function renderSearchResult() {
        if (props.searchResult) {
            return (

                props.searchResult.map((data: any, index: number) => {
                    return (
                        <SearchProfile
                            username={props.searchResult[index].username}
                        />
                    );
                })
            )

        } else {
            return (
                <LoadingAnimation/>
            )
        }
    }

    return(
        <div className="mx-auto
                        my-10
                        px-4
                        sm:px-6
                        lg:px-20">

            <div className="grid
                            grid-cols-
                            md:grid-cols-4
                            gap-4">

            {renderSearchResult()}

            </div>
        </div>
    )
}