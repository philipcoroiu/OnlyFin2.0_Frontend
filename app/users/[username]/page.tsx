import UserProfileCard from "@/app/users/components/UserProfileCard";
import UserReviews from "@/app/users/components/UserReviews";
import EditableUserReview from "@/app/users/components/EditableUserReview";

export default function Page({params}: { params: { username: string } }) {
    return (
        <div className={""}>
            <div className={"justify-center flex lg:w-1/2 mx-auto px-7 py-7"}>
                <UserProfileCard
                    key={params.username}
                    username={params.username}
                />
            </div>
            <div className={"justify-center flex lg:w-1/2 mx-auto px-7"}>
                <EditableUserReview
                    targetUsername={params.username}
                />
            </div>
            <div className={"justify-center flex-wrap lg:w-1/2 mx-auto py-5"}>
                <UserReviews
                    targetUsername={params.username}
                />
            </div>
        </div>
    )
}