"use client"

import {useEffect, useState} from "react";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import UserReviewCard from "@/app/users/components/UserReviewCard";

export default function UserReviews({targetUsername}: any) {

    const [reviews, setReviews] = useState<OnlyfinReview[]>([])

    const [noReviews, setNoReviews] = useState<boolean>(false)

    useEffect(() => {
        ApiCalls.getReviews(targetUsername)
            .then(response => {
                const fetchedReviews: OnlyfinReview[] = response.data

                setReviews(fetchedReviews)

                if (response.status === 204) {
                    setNoReviews(true)
                }
            })
            .catch(error => {
                console.log("[UserReviews.useEffect()]" + error)
            })
    }, [])

    function renderReviews() {
        return reviews.map(currentReview => {
            return (
                <UserReviewCard
                    key={currentReview.id}
                    id={currentReview.id}
                    reviewText={currentReview.reviewText}
                    target={currentReview.target}
                    author={currentReview.author}
                    isAuthor={currentReview.isAuthor}
                />
            )
        })
    }

    function renderNoReviewsFound() {
        return (
            <div>NO REVIEWS BY OTHER USERS FOUND...</div>
        )
    }

    function renderNothing() {
        return <></>
    }

    return (
        <>
            {noReviews ? renderNoReviewsFound() : renderNothing()}
            {reviews ? renderReviews() : renderNothing()}
        </>
    )
}