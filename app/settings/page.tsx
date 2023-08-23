import UserInformation from "@/app/settings/components/UserInformation";
import ImageChanger from "@/app/settings/components/ImageChanger";
import PasswordChangeForm from "@/app/settings/components/PasswordChangeForm";

export default function Page() {
    return (
        <div className={`flex 
        flex-wrap 
        justify-center 
        my-10
        
        mx-auto
        px-1
        xsm:px-2
        sm:px-10
        md:w-5/6
        lg:w-2/3
        `}>
            <div className="flex-1
                bg-gray-50
                dark:bg-gray-700
                rounded-lg
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