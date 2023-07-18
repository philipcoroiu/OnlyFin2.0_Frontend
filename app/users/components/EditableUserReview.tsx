"use client"

import {useEffect, useState} from "react";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import UserReviewCard from "@/app/users/components/UserReviewCard";

export default function EditableUserReview({targetUsername}: any) {
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
                if (error.response?.status === 404) {
                    setNoReviewExists(true)
                } else {
                    console.log("[MutableUserReview.getMyReview()]: " + error)
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
                console.log("[EditableUserReview.handleSubmit()]: " + error)
            })
    }

    //TODO: row & cols in textarea sucks. plz fix
    function renderReviewInputBox() {
        return (
            <>
                <div className="border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">

                    <div className="px-4 py-3 bg-white rounded-t-lg dark:bg-gray-800">
                            <textarea className="text-gray-900 bg-white border-none dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                                      placeholder="Write a review..."
                                      rows={7}
                                      cols={60}
                                      required
                                      onChange={handleInputChange}>
                            </textarea>
                    </div>

                    <button
                        onClick={handleSubmit}
                        type="button"
                        className="
                           text-white
                           bg-blue-700
                           font-medium
                           rounded-lg
                           text-sm
                           m-2
                           p-4
                           hover:bg-blue-800
                           focus:ring-4
                           focus:ring-blue-300
                           focus:outline-none
                           dark:bg-blue-600
                           dark:hover:bg-blue-700
                           dark:focus:ring-blue-800"
                    >
                        Post review
                    </button>

                </div>
            </>
        )
    }

    function renderReviewPost() {
        if (ownReview) {
            return (
                <UserReviewCard
                    id={ownReview.id}
                    reviewText={ownReview.reviewText}
                    target={ownReview.target}
                    author={ownReview.author}
                    isAuthor={ownReview.isAuthor}
                />
            )
        }
    }

    function renderNothing() {
        return <></>
    }

    return (
        <>
            {ownReview ? renderReviewPost() : renderNothing()}
            {noReviewExists ? renderReviewInputBox() : renderNothing()}
        </>
    )
}