import UserProfileCard from "@/app/users/components/UserProfileCard";
import UserReviews from "@/app/users/components/UserReviews";
import EditableUserReview from "@/app/users/components/EditableUserReview";
import { Metadata } from "next";

type Props = { params: { username: string } }

export async function generateMetadata({params}: Props): Promise<Metadata> {
    return {
        title: `Onlyfin: ${params.username}'s page`
    }
}

export default function Page({params}: Props) {
    return (
        <>
            <div className={`justify-center 
            flex
            my-10
            
            mx-auto
            px-1
            xsm:px-2
            sm:px-10
            md:w-5/6
            lg:w-2/3
            `}>
                <UserProfileCard
                    key={params.username}
                    username={params.username}
                />
            </div>
            <div className={`justify-center 
            flex 
            
            mx-auto
            px-1
            xsm:px-2
            sm:px-10
            md:w-5/6
            lg:w-2/3
            `}>
                <EditableUserReview
                    targetUsername={params.username}
                />
            </div>
            <div className={`justify-center 
            flex-wrap 
            py-5
            
            mx-auto
            px-1
            xsm:px-2
            sm:px-10
            md:w-5/6
            lg:w-2/3
            `}>
                <UserReviews
                    targetUsername={params.username}
                />
            </div>
        </>
    )
}