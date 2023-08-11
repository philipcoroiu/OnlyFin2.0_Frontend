import UserInformation from "@/app/settings/components/UserInformation";
import ImageChanger from "@/app/settings/components/ImageChanger";
import PasswordChangeForm from "@/app/settings/components/PasswordChangeForm";

export default function Page() {

    return (
        <div className={"flex flex-wrap justify-center mt-10 mx-10"}>

            <div className="flex-1
                mx-2
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