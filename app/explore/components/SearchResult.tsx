import SearchProfile from "@/app/explore/components/searchProfile/SearchProfile";
import SearchProfileSkeleton from "@/app/explore/components/searchProfile/SearchProfileSkeleton";

type Props = { searchResult: OnlyfinProfileSubInfo[] | undefined }

export default function SearchResult(props: Props) {

    function renderSearchResult() {
        return (
            props.searchResult?.map((data: OnlyfinProfileSubInfo) => {
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

    return (
        <div>
            {props.searchResult ?
                (
                    <div className="mx-auto my-10 px-4 sm:px-6 lg:px-20">
                        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4">
                            {renderSearchResult()}
                        </div>
                    </div>
                )
                :
                (
                    <div className="mx-auto my-10 px-4 sm:px-6 lg:px-20">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <SearchProfileSkeleton/>
                            <SearchProfileSkeleton/>
                            <SearchProfileSkeleton/>
                            <SearchProfileSkeleton/>
                        </div>
                    </div>
                )}
        </div>
    )
}