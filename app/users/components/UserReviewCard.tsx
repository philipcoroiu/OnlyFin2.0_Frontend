export default function UserReviewCard(review: OnlyfinReview) {
    return (
        <div className={"bg-gray-50 rounded-lg p-7 m-7 dark:bg-gray-700"}>
            <div>ID: {review.id}</div>
            <div>Review text: {review.reviewText}</div>
            <div>Target user: {review.target.username}</div>
            <div>Author user: {review.author.username}</div>
            <div>Is author: {review.isAuthor + ""}</div>
        </div>
    )
}