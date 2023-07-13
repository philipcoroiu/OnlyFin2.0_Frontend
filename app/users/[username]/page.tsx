import UserProfileCard from "@/app/users/components/UserProfileCard";

export default function Page({params}: { params: { username: string } }) {
    return (
        //TODO: FIX (MAYBE) CURSED CSS
        <div className={"justify-center flex"}>
            <UserProfileCard
                key={params.username}
                username={params.username}
            />
        </div>
    )
}
