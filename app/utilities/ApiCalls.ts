import axios, {AxiosResponse} from 'axios';

//Error handling (currently only displays the error?)
function handleError(error: any) {
    console.log('There was an error in the API call ', error)
}

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND,
})

/**
 * To use this class write import {ApiCalls} from "@/app/utilities/ApiCalls";
 * To call functions write ApiCalls.{function name}
 *
 * TODO: test this class and the endpoints in it
 */
export class ApiCalls {

    /*
     ********************************
     *                              *
     * ---   SPRING ENDPOINTS   --- *
     *                              *
     ********************************
     */

    public static async postLoginPlz(username: string, password: string): Promise<AxiosResponse> {
        return axiosInstance.post(
            "/plz",
            `username=${username}&password=${password}`,
            {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                withCredentials: true
            }
        )
    }

    public static async logOut(): Promise<AxiosResponse> {
        return axiosInstance.post(
            "/logout",
            {},
            {withCredentials: true}
        )
    }

    /*
     ********************************
     *                              *
     * ---   /users ENDPOINTS   --- *
     *                              *
     ********************************
     */

    public static async fetchAboutMe(targetUsername: string): Promise<AxiosResponse> {
        return axiosInstance.get(
            `/users/about-me?targetUsername=${targetUsername}`,
            {}
        );
    }

    public static async changePassword(oldPassword: string, newPassword: string): Promise<AxiosResponse> {
        return axiosInstance.post(
            "/users/password-change",
            {
                oldPassword: oldPassword,
                newPassword: newPassword},
            {withCredentials: true}
        )
    }

    public static async registerNewUser(email: string, username: string, password: string): Promise<AxiosResponse> {
        return axiosInstance.post(
            "/users/register",
            {
                email: email,
                username: username,
                password: password
            },
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
    }

    public static async fetchAllUsers(): Promise<AxiosResponse> {
        return axiosInstance.get(
            "/users/search/all",
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
    }

    public static async searchByUsername(username: string): Promise<AxiosResponse> {
        return axiosInstance.get(
            `/users/search/username?username=${username}`,
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
    }

    public static async updateAboutMe(newAboutMe: string) {
        return axiosInstance.put(
            "/users/update-about-me",
            {newAboutMe: newAboutMe},
            {withCredentials: true}
        )
    }

    public static async getUser(username: string): Promise<AxiosResponse> {
        return axiosInstance.get(
            `/users/username?username=${username}`,
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
    }

    public static async whoAmI(): Promise<AxiosResponse> {
        return axiosInstance.get(
            "/users/whoami",
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
    }

    /*
     ********************************
     *                              *
     * ---  /stocks ENDPOINTS   --- *
     *                              *
     ********************************
     */

    public static async getAllStocks() {
        return axiosInstance.get(
            "/stocks/all",
            {},
        )
    }

    public static async findStocksByName(name: string) {
        return axiosInstance.get(
            `/stocks/search?name=${name}`,
        )
    }

    /*
     ********************************
     *                              *
     *---/subscriptions ENDPOINTS---*
     *                              *
     ********************************
     */

    public static async subscribe(username: string): Promise<AxiosResponse> {
        return axiosInstance.put(
            `/subscriptions/add?targetUsername=${username}`,
            {},
            {withCredentials: true}
        )
    }

    public static async checkSubscription(targetUsername: string): Promise<AxiosResponse> {
        return axiosInstance.get(
            `/subscriptions/check?targetUsername=${targetUsername}`,
            {withCredentials: true}
        )
    }

    public static async getSubscriptionList(): Promise<AxiosResponse> {
        return axiosInstance.get(
            "/subscriptions/list",
            {withCredentials: true}
        )
    }

    public static async unsubscribe(username: string): Promise<AxiosResponse> {
        return axiosInstance.delete(
            `/subscriptions/remove?targetUsername=${username}`,
            {withCredentials: true}
        )
    }

    /*
     ********************************
     *                              *
     *---    /dash ENDPOINTS     ---*
     *                              *
     ********************************
     */

    //TODO: Add /dash endpoints here
    

    /*
     ********************************
     *                              *
     *---   /search ENDPOINTS    ---*
     *                              *
     ********************************
     */

    public static async findAnalystsThatCoverStock(targetStockId: number): Promise<AxiosResponse> {
        return axiosInstance.get(
            `/search/covers-stock?targetStockId=${targetStockId}`,
            {}
        )
    }

}
