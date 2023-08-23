import UserInformation from "@/app/settings/components/UserInformation";
import ImageChanger from "@/app/settings/components/ImageChanger";
import PasswordChangeForm from "@/app/settings/components/PasswordChangeForm";

export default function Page() {
    return (
        <div className={`flex 
        flex-wrap 
        justify-center 
        mt-10
        mx-1
        sm:mx-5
        md:mx-10
        lg:mx-20
        `}>
            <div className="flex-1
                bg-gray-50
                dark:bg-gray-700
                rounded
                shadow-lg
                p-4
                h-full
                ">

                <UserInformation/>

                <ImageChanger/>

                <PasswordChangeForm/>
            </div>
        </div>
    )
}