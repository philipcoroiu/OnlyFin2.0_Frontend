import axios, {AxiosResponse} from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND,
})

/**
 * To use this class, write import {ApiCalls} from "@/app/utilities/ApiCalls";
 * To call functions write ApiCalls.{function name}
 */
export class ApiCalls {

    /*
     ********************************
     *                              *
     * ---   SPRING ENDPOINTS   --- *
     *                              *
     ********************************
     */

    public static async postLoginPlz(email: string, password: string): Promise<AxiosResponse> {
        return axiosInstance.post(
            "/plz",
            `username=${email}&password=${password}`,
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
        )
    }

    public static async changePassword(oldPassword: string, newPassword: string): Promise<AxiosResponse> {
        return axiosInstance.post(
            "/users/password-change",
            {
                oldPassword: oldPassword,
                newPassword: newPassword
            },
            {withCredentials: true}
        )
    }

    public static async getProfilePicture(targetUsername: string): Promise<AxiosResponse> {
        return axiosInstance.get(
            `/users/profile-picture?targetUsername=${targetUsername}`,
            {}
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

    public static async updateAboutMe(newAboutMe: string): Promise<AxiosResponse> {
        return axiosInstance.put(
            "/users/update-about-me",
            {newAboutMe: newAboutMe},
            {withCredentials: true}
        )
    }

    public static async updateProfilePicture(profilePictureId: number): Promise<AxiosResponse> {
        return axiosInstance.put(
            "/users/update-profile-picture",
            {profilePictureId: profilePictureId},
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

    public static async getAllStocks(): Promise<AxiosResponse> {
        return axiosInstance.get(
            "/stocks/all",
            {}
        )
    }

    public static async findStocksByName(name: string): Promise<AxiosResponse> {
        return axiosInstance.get(
            `/stocks/search?name=${name}`,
            {}
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
    //TODO: Test all /dash endpoints

    public static async addCategory(userStockId: number, categoryName: string): Promise<AxiosResponse> {
        return axiosInstance.post(
            "/dash/add-category",
            {
                userStockId: userStockId,
                categoryName: categoryName
            },
            {withCredentials: true}
        )
    }

    public static async addModule(targetCategoryId: number, height: number, width: number, xAxis: number, yAxis: number, type: string, content: any): Promise<AxiosResponse> {
        return axiosInstance.post(
            "/dash/add-module",
            {
                targetCategoryId: targetCategoryId,
                height: height,
                width: width,
                xAxis: xAxis,
                yAxis: yAxis,
                type: type,
                content: content
            },
            {withCredentials: true}
        )
    }

    public static async addStock(targetStockId: number): Promise<AxiosResponse> {
        return axiosInstance.post(
            `/dash/add-stock?targetStockId=${targetStockId}`,
            {},
            {withCredentials: true}
        )
    }

    public static async deleteCategory(targetCategoryId: number): Promise<AxiosResponse> {
        return axiosInstance.delete(
            `/dash/delete-category?targetCategoryId=${targetCategoryId}`,
            {withCredentials: true}
        )
    }

    public static async deleteModule(moduleId: number): Promise<AxiosResponse> {
        return axiosInstance.delete(
            `/dash/delete-module?moduleId=${moduleId}`,
            {withCredentials: true}
        )
    }

    public static async deleteStock(targetUserStockId: number): Promise<AxiosResponse> {
        return axiosInstance.delete(
            `/dash/delete-stock?targetUserStockId=${targetUserStockId}`,
            {withCredentials: true}
        )
    }

    public static async fetchCategoriesAndModulesUnderUserStock(userStockId: number): Promise<AxiosResponse> {
        return axiosInstance.get(
            `/dash/fetch-categories-and-modules-under-user-stock?userStockId=${userStockId}`,
            {}
        )
    }

    public static async fetchTargetUsersStocks(targetUsername: string): Promise<AxiosResponse> {
        return axiosInstance.get(
            `/dash/fetch-user-stocks?targetUsername=${targetUsername}`,
            {}
        )
    }

    public static async fetchDashboardMetadata(): Promise<AxiosResponse> {
        return axiosInstance.get(
            "/dash/metadata",
            {withCredentials: true}
        )
    }

    public static async updateCategoryName(targetCategoryId: number, newCategoryName: string): Promise<AxiosResponse> {
        return axiosInstance.put(
            "/dash/update-category",
            {
                targetCategoryId: targetCategoryId,
                newCategoryName: newCategoryName
            },
            {withCredentials: true}
        )
    }

    public static async updateModule(moduleId: number, targetCategoryId: number, height: number, width: number, xAxis: number, yAxis: number, type: string, content: any): Promise<AxiosResponse> {
        return axiosInstance.put(
            `/dash/update-module?moduleId=${moduleId}`,
            {
                targetCategoryId: targetCategoryId,
                height: height,
                width: width,
                xAxis: xAxis,
                yAxis: yAxis,
                type: type,
                content: content
            },
            {withCredentials: true}
        )
    }

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

    /*
     ********************************
     *                              *
     *---   /reviews ENDPOINTS   ---*
     *                              *
     ********************************
     */

    public static async pushReview(targetUsername: string, reviewText: string): Promise<AxiosResponse> {
        return axiosInstance.put(
            "/reviews/push",
            {targetUsername, reviewText},
            {withCredentials: true}
        )
    }

    public static async deleteReview(targetUsername: string): Promise<AxiosResponse> {
        return axiosInstance.delete(
            `/reviews/delete?targetUsername=${targetUsername}`,
            {withCredentials: true}
        )
    }

    public static async getReviews(targetUsername: string): Promise<AxiosResponse> {
        return axiosInstance.get(
            `/reviews/get?targetUsername=${targetUsername}`,
            {withCredentials: true},
        )
    }

    public static async getMyReview(targetUsername: string): Promise<AxiosResponse> {
        return axiosInstance.get(
            `/reviews/my-review?targetUsername=${targetUsername}`,
            {withCredentials: true}
        )
    }

}
