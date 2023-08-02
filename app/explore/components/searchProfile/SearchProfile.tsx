import Avatar from "@/app/components/Avatar";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {ApiCalls} from "@/app/utilities/ApiCalls";
import Link from "next/link";

type Props = {
    username: string,
    isSubscribed: boolean
}

export default function SearchProfile(props: Props) {
    const [subscribed, setSubscribed] = useState<boolean>(props.isSubscribed)

    const router = useRouter()

    function handleSubscribeButtonClick() {
        if (!subscribed) {
            subscribe()
        } else {
            unsubscribe()
        }
    }

    function subscribe() {
        ApiCalls.subscribe(props.username)
            .then(response => {
                setSubscribed(true)
            })
            .catch(error => {
                if (error.response.status === 401) {
                    router.push("/login?redirect=explore")
                }
            })
    }

    function unsubscribe() {
        ApiCalls.unsubscribe(props.username)
            .then(response => {
                setSubscribed(false)
            })
            .catch(error => {
                if (error.response.status === 401) {
                    router.push("/login?redirect=explore")
                }
            })
    }

    return (
        <div className="flex justify-center bg-gray-50 rounded-lg p-4 dark:bg-gray-700">
            <div>
                <div className="w-20 h-20 ml-4">
                    <Link href={"/users/" + props.username}>
                        <Avatar
                            username={props.username}
                        />
                    </Link>
                </div>

                <div className="flex justify-center items-center text-xl font-bold mt-2">
                    <Link href={"/dashboard/" + props.username}>{props.username}</Link>
                </div>

                <button
                    onClick={handleSubscribeButtonClick}
                    type="button"
                    className="text-white
                               bg-blue-700
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
                               dark:focus:ring-blue-800
                               mt-4">
                    {subscribed ? "UNSUBSCRIBE" : "SUBSCRIBE"}
                </button>
            </div>
        </div>
    )
}