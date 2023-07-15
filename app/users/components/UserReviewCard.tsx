import {ApiCalls} from "@/app/utilities/ApiCalls";

export default function UserReviewCard(review: OnlyfinReview) {

    function handleDelete() {
        ApiCalls.deleteReview(review.target.username)
            .then(response => {
                document.location.reload()
            })
            .catch(error => {
                console.log("[UserReviewCard.handleDelete: ]" + error)
            })
    }

    return (
        <>
            {review.isAuthor ?
                <div className={"bg-gray-50 rounded-lg p-7 m-7 w-full dark:bg-gray-700"}>
                    <button onClick={handleDelete}>
                        DELETE REVIEW
                    </button>
                    <div>ID: {review.id}</div>
                    <div>Review text: {review.reviewText}</div>
                    <div>Target user: {review.target.username}</div>
                    <div>Author user: {review.author.username}</div>
                    <div>Is author: {review.isAuthor + ""}</div>
                </div>
                :
                <div className={"bg-gray-50 rounded-lg p-7 m-7 dark:bg-gray-700"}>
                    <div>ID: {review.id}</div>
                    <div>Review text: {review.reviewText}</div>
                    <div>Target user: {review.target.username}</div>
                    <div>Author user: {review.author.username}</div>
                    <div>Is author: {review.isAuthor + ""}</div>
                </div>
            }
        </>
    )
}