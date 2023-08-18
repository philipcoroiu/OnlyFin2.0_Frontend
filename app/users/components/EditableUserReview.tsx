"use client"

import {useEffect, useState} from "react";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import UserReviewCard from "@/app/users/components/UserReviewCard";

type Props = { targetUsername: string }

export default function EditableUserReview(props: Props) {
    const [ownReview, setOwnReview] = useState<OnlyfinReview>()
    const [noReviewExists, setNoReviewExists] = useState<boolean>(false)

    const [userReviewText, setUserReviewText] = useState<string>("")
    const [maxCharacter, setMaxCharacter] = useState<number>(2500)

    useEffect(getMyReview, [])

    function getMyReview() {
        ApiCalls.getMyReview(props.targetUsername)
            .then(response => {
                const fetchedReview: OnlyfinReview = response.data

                setOwnReview(fetchedReview)
            })
            .catch(error => {
                if (error.response?.status === 404) {
                    setNoReviewExists(true)
                }
                else {
                    console.log("[MutableUserReview.getMyReview()]: " + error)
                }
            })
    }

    function handleInputChange(event: any) {
        setUserReviewText(event.target.value)
        setMaxCharacter(2500 - event.target.value.length)
    }

    function handleSubmit() {
        ApiCalls.pushReview(props.targetUsername, userReviewText)
            .then(() => {
                setNoReviewExists(false)
                getMyReview()
            })
            .catch(error => {
                console.log("[EditableUserReview.handleSubmit()]: " + error)
            })
    }

    function renderReviewInputBox() {
        return (
            <>
                <div
                    className="border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 w-full">

                    <div className="px-4 py-3 bg-white rounded-t-lg dark:bg-gray-800 flex flex-col">
                            <textarea
                                className="outline-none text-gray-900 bg-white border-none dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 w-full"
                                placeholder="Write a review..."
                                maxLength={2500}
                                required
                                onChange={handleInputChange}>
                            </textarea>
                        <p className="text-xs self-end mt-1">{maxCharacter} characters remaining</p>
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