import axios, {AxiosError, AxiosResponse} from 'axios';

//Error handling (currently only displays the error?)
function handleError(error: any) {
    console.log('There was an error in the API call ', error)
}

/**
 * To use this class write import {ApiCalls} from "@/app/utilities/ApiCalls";
 * To call functions write ApiCalls.{function name}
 *
 * TODO: test this class and the endpoints in it
 */
export class ApiCalls {

    //Static function is created for each endpoint from the backend
    public static async registerNewUser(email: String, username: String, password: String): Promise<AxiosResponse> {
        return axios.post(
            process.env.NEXT_PUBLIC_BACKEND + "/users/register",
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

    public static async postLoginPlz(username: String, password: String): Promise<AxiosResponse> {
        return axios.post(
            process.env.NEXT_PUBLIC_BACKEND + "/plz",
            `username=${username}&password=${password}`,
            {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                withCredentials: true
            }
        )
    }

    public static async fetchAllUsers(): Promise<AxiosResponse> {
        return axios.get(
            process.env.NEXT_PUBLIC_BACKEND + "/users/search/all",
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
    }

    public static async getUser(username: String): Promise<AxiosResponse> {
        return axios.get(
            process.env.NEXT_PUBLIC_BACKEND + `/users/username?username=${username}`,
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
    }

    public static async searchByUsername(username: String): Promise<AxiosResponse> {
        return axios.get(
            process.env.NEXT_PUBLIC_BACKEND + `/users/search/username?username=${username}`,
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
    }

    public static async whoAmI(): Promise<AxiosResponse> {
        return axios.get(
            process.env.NEXT_PUBLIC_BACKEND + "/users/whoami",
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
    }

    public static async logOut(): Promise<AxiosResponse> {
        return axios.post(
            process.env.NEXT_PUBLIC_BACKEND + "/logout",
            {},
            {withCredentials: true}
        )
    }

    public static async subscribe(username: string): Promise<AxiosResponse> {
        return axios.put(
            process.env.NEXT_PUBLIC_BACKEND + `/subscriptions/add?targetUsername=${username}`,
            {},
            {withCredentials: true}
        )
    }

    public static async unsubscribe(username: string): Promise<AxiosResponse> {
        return axios.delete(
            process.env.NEXT_PUBLIC_BACKEND + `/subscriptions/remove?targetUsername=${username}`,
            {withCredentials: true}
        )
    }

}
