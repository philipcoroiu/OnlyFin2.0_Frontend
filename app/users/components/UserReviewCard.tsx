import {ApiCalls} from "@/app/utilities/ApiCalls";
import Avatar from "@/app/components/Avatar";
import Link from "next/link";

export default function UserReviewCard(review: OnlyfinReview) {

    function handleDelete() {
        ApiCalls.deleteReview(review.target.username)
            .then(response => {
                document.location.reload()
            })
            .catch(error => {
                console.log("[UserReviewCard.handleDelete()]: " + error)
            })
    }

    function renderEditableView() {
        return (
            <div className={`
                        bg-gray-50 
                        rounded-lg 
                        p-7 
                        mb-4
                        md:mx-3
                        w-full 
                        dark:bg-gray-700`}
            >
                <button onClick={handleDelete} className={`
                            py-2 
                            text-white
                            bg-blue-700
                            hover:bg-blue-800
                            focus:ring-4
                            focus:ring-blue-300
                            font-medium
                            rounded-lg
                            text-sm
                            px-5
                            mr-2
                            mb-2
                            dark:bg-blue-600
                            dark:hover:bg-blue-700
                            focus:outline-none
                            dark:focus:ring-blue-800"`}
                >
                    DELETE REVIEW
                </button>

                <div className="flex justify-start items-center mb-4 flex-wrap">
                    <div className="w-20 h-20 mr-4">
                        <Link href={`/me`}>
                            <Avatar/>
                        </Link>
                    </div>

                    <Link className={"text-2xl font-bold py-2"} href={`/me`}>
                        YOU
                    </Link>

                </div>

                <p className={"break-words"}>{review.reviewText}</p>
            </div>
        )
    }

    function renderReadOnlyView() {
        return (
            <div className={`
                        bg-gray-50 
                        rounded-lg 
                        p-7 
                        mb-4
                        md:mx-3
                        w-full 
                        dark:bg-gray-700`}
            >
                <div className="flex justify-start items-center mb-4 flex-wrap">
                    <div className="w-20 h-20 mr-4">
                        <Link href={`/users/${review.author.username}`}>
                            <Avatar/>
                        </Link>
                    </div>


                    <Link className={"text-2xl font-bold py-2"} href={`/users/${review.author.username}`}>
                        {review.author.username}
                    </Link>
                </div>

                <p className={"break-words"}>{review.reviewText}</p>
            </div>
        )
    }

    return (
        <>
            {review.isAuthor ? renderEditableView() : renderReadOnlyView()}
        </>
    )
}