import UserProfileCard from "@/app/users/components/UserProfileCard";
import UserReviews from "@/app/users/components/UserReviews";
import EditableUserReview from "@/app/users/components/EditableUserReview";

export default function Page({params}: { params: { username: string } }) {
    return (
        //TODO: FIX CURSED CSS in components and add error handling
        <div className={""}>
            <div className={"justify-center flex"}>
                <UserProfileCard
                    key={params.username}
                    username={params.username}
                />
            </div>
            <div className={"justify-center flex w-1/2 mx-auto"}>
                <EditableUserReview
                    targetUsername={params.username}
                />
            </div>
            <div className={"justify-center flex-wrap w-1/2 mx-auto py-5"}>
                <UserReviews
                    targetUsername={params.username}
                />
            </div>
        </div>
    )
}