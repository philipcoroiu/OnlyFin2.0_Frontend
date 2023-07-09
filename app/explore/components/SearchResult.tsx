"use client"

import LoadingAnimation from "@/app/components/LoadingAnimation";
import SearchProfile from "@/app/explore/components/searchProfile/SearchProfile";


export default function SearchResult({searchResult}: any) {

    function renderSearchResult() {
        return (
            searchResult.map((data: any) => {
                return (
                    <SearchProfile
                        key={data.id}
                        username={data.username}
                        isSubscribed={data.isSubscribed}
                    />
                );
            })
        )
    }

    return(
        <div>
            {searchResult ? (
                    <div className="mx-auto my-10 px-4 sm:px-6 lg:px-20">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {renderSearchResult()}
                        </div>
                    </div>
                ) : (
                    <LoadingAnimation />
                )}
        </div>
    )
}