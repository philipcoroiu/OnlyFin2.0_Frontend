"use client"

import {useEffect, useState} from "react";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import UserReviewCard from "@/app/users/components/UserReviewCard";

export default function MutableUserReview({targetUsername}: any) {
    const [ownReview, setOwnReview] = useState<OnlyfinReview>()
    const [noReviewExists, setNoReviewExists] = useState<boolean>(false)

    const [userReviewText, setUserReviewText] = useState<string>("")

    useEffect(getMyReview, [])

    function getMyReview() {
        ApiCalls.getMyReview(targetUsername)
            .then(response => {
                const fetchedReview: OnlyfinReview = response.data

                setOwnReview(fetchedReview)
            })
            .catch(error => {
                if (error.response.status === 404) {
                    setNoReviewExists(true)
                }
            })
    }

    function handleInputChange(event: any) {
        setUserReviewText(event.target.value)
    }

    function handleSubmit() {
        ApiCalls.pushReview(targetUsername, userReviewText)
            .then(response => {
                setNoReviewExists(false)
                getMyReview()
            })
            .catch(error => {
                console.log("[EditableUserReview.handleSubmit]: " + error)
            })
    }

    function renderReviewNoPostExists() {
        return (
            <>
                <input className={"text-black"}
                       type="text"
                       value={userReviewText}
                       onChange={handleInputChange}
                       placeholder="Write your review..."
                />
                <button className="
                           bg-blue-600
                           text-white
                           m-2
                           hover:bg-blue-800
                           focus:ring-4
                           focus:ring-blue-300
                           font-medium
                           rounded-lg
                           text-sm
                           px-5
                           py-2.5
                           mr-2
                           mb-2
                           dark:bg-blue-600
                           dark:hover:bg-blue-700
                           focus:outline-none
                           dark:focus:ring-blue-800"
                           onClick={handleSubmit}>Post review</button>
            </>
        )
    }

    function renderReviewPostExists() {
        if (ownReview) {
            return <UserReviewCard id={ownReview.id}
                                   reviewText={ownReview.reviewText}
                                   target={ownReview.target}
                                   author={ownReview.author}
                                   isAuthor={ownReview.isAuthor}
            />
        }
    }

    function renderNothing() {
        return <></>
    }

    return (
        <>
            {ownReview ? renderReviewPostExists() : renderNothing()}
            {noReviewExists ? renderReviewNoPostExists() : renderNothing()}
        </>
    )
}