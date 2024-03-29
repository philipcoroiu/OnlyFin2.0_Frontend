import axios, { AxiosInstance, AxiosResponse } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND,
})

/**
 * To use this class, write import { ApiCalls } from "@/app/utilities/ApiCalls";
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

    public static async login(email: FormDataEntryValue | null, password: FormDataEntryValue | null): Promise<AxiosResponse<void>> {
        return axiosInstance.post(
            "/plz",
            `username=${email}&password=${password}`,
            {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                withCredentials: true
            }
        )
    }

    public static async logOut(): Promise<AxiosResponse<void>> {
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

    public static async fetchAboutMe(targetUsername: string): Promise<AxiosResponse<string>> {
        return axiosInstance.get(
            `/users/about-me?targetUsername=${targetUsername}`,
            {}
        )
    }

    public static async changePassword(oldPassword: string, newPassword: string): Promise<AxiosResponse<string>> {
        return axiosInstance.post(
            "/users/password-change",
            {
                oldPassword: oldPassword,
                newPassword: newPassword
            },
            {withCredentials: true}
        )
    }

    public static async getProfilePicture(targetUsername: string): Promise<AxiosResponse<number>> {
        return axiosInstance.get(
            `/users/profile-picture?targetUsername=${targetUsername}`,
            {}
        )
    }

    public static async registerNewUser(email: string, username: string, password: string, turnstileToken: string | undefined): Promise<AxiosResponse<string>> {
        return axiosInstance.post(
            "/users/register",
            {
                email: email,
                username: username,
                password: password,
                turnstileToken: turnstileToken
            },
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
    }

    public static async fetchNewestUsers(): Promise<AxiosResponse<OnlyfinProfileSubInfo[]>> {
        return axiosInstance.get(
            "/users/search/newest",
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
    }

    public static async searchByUsername(username: string): Promise<AxiosResponse<OnlyfinProfileSubInfo[]>> {
        return axiosInstance.get(
            `/users/search/username?username=${username}`,
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
    }

    public static async updateAboutMe(newAboutMe: string): Promise<AxiosResponse<{ newAboutMe: string }>> {
        return axiosInstance.put(
            "/users/update-about-me",
            {newAboutMe: newAboutMe},
            {withCredentials: true}
        )
    }

    public static async updateProfilePicture(profilePictureId: number): Promise<AxiosResponse<void>> {
        return axiosInstance.put(
            "/users/update-profile-picture",
            {profilePictureId: profilePictureId},
            {withCredentials: true}
        )
    }

    public static async getUser(username: string): Promise<AxiosResponse<OnlyfinProfileExtended>> {
        return axiosInstance.get(
            `/users/username?username=${username}`,
            {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            }
        )
    }

    public static async whoAmI(): Promise<AxiosResponse<string>> {
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

    public static async addCustomStock(name: string, ticker: string | undefined): Promise<AxiosResponse<void>> {
        return axiosInstance.post(
            "/stocks/add-custom-stock",
            {
                name: name,
                ticker: ticker
            },
            {withCredentials: true}
        )
    }

    public static async getAllStocks(): Promise<AxiosResponse<OnlyfinStock[]>> {
        return axiosInstance.get(
            "/stocks/all",
            {}
        )
    }

    public static async deleteCustomStock(customStockId: number): Promise<AxiosResponse<void>> {
        return axiosInstance.delete(
            `/stocks/delete-custom-stock?customStockId=${customStockId}`,
            {withCredentials: true},
        )
    }

    public static async findStocksByName(name: string): Promise<AxiosResponse<OnlyfinStock[]>> {
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

    public static async subscribe(username: string): Promise<AxiosResponse<void>> {
        return axiosInstance.put(
            `/subscriptions/add?targetUsername=${username}`,
            {},
            {withCredentials: true}
        )
    }

    public static async checkSubscription(targetUsername: string): Promise<AxiosResponse<boolean>> {
        return axiosInstance.get(
            `/subscriptions/check?targetUsername=${targetUsername}`,
            {withCredentials: true}
        )
    }

    public static async getUserSubscriptionCount(targetUsername: string): Promise<AxiosResponse<number>> {
        return axiosInstance.get(
            `/subscriptions/count?targetUsername=${targetUsername}`,
            {}
        )
    }

    public static async getSubscriptionList(): Promise<AxiosResponse<OnlyfinProfile[]>> {
        return axiosInstance.get(
            "/subscriptions/list",
            {withCredentials: true}
        )
    }

    public static async unsubscribe(username: string): Promise<AxiosResponse<void>> {
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
    public static async addCategory(userStockId: number, categoryName: string): Promise<AxiosResponse<string>> {
        return axiosInstance.post(
            "/dash/add-category",
            {
                userStockId: userStockId,
                categoryName: categoryName
            },
            {withCredentials: true}
        )
    }

    public static async addModule(targetCategoryId: number, height: number, width: number, xAxis: number, yAxis: number, type: string, content: any): Promise<AxiosResponse<void>> {
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

    public static async addStock(targetStockId: number): Promise<AxiosResponse<string>> {
        return axiosInstance.post(
            `/dash/add-stock?targetStockId=${targetStockId}`,
            {},
            {withCredentials: true}
        )
    }

    public static async deleteCategory(targetCategoryId: number): Promise<AxiosResponse<void>> {
        return axiosInstance.delete(
            `/dash/delete-category?targetCategoryId=${targetCategoryId}`,
            {withCredentials: true}
        )
    }

    public static async deleteModule(moduleId: number): Promise<AxiosResponse<void>> {
        return axiosInstance.delete(
            `/dash/delete-module?moduleId=${moduleId}`,
            {withCredentials: true}
        )
    }

    public static async deleteStock(targetUserStockId: number): Promise<AxiosResponse<void>> {
        return axiosInstance.delete(
            `/dash/delete-stock?targetUserStockId=${targetUserStockId}`,
            {withCredentials: true}
        )
    }

    public static async fetchCategoriesAndModulesUnderUserStock(userStockId: number): Promise<AxiosResponse<OnlyfinUserStockTab>> {
        return axiosInstance.get(
            `/dash/fetch-categories-and-modules-under-user-stock?userStockId=${userStockId}`,
            {}
        )
    }

    public static async fetchModule(moduleId: number): Promise<AxiosResponse<OnlyfinModule>> {
        return axiosInstance.get(
            `/dash/fetch-module?moduleId=${moduleId}`,
            {withCredentials: true}
        )
    }

    public static async fetchTargetUsersStocks(targetUsername: string): Promise<AxiosResponse<OnlyfinUserStock[]>> {
        return axiosInstance.get(
            `/dash/fetch-user-stocks?targetUsername=${targetUsername}`,
            {}
        )
    }

    public static async fetchDashboardMetadata(): Promise<AxiosResponse<OnlyfinDashboardMetadata>> {
        return axiosInstance.get(
            "/dash/metadata",
            {withCredentials: true}
        )
    }

    public static async updateCategoryName(targetCategoryId: number, newCategoryName: string): Promise<AxiosResponse<string>> {
        return axiosInstance.put(
            "/dash/update-category",
            {
                targetCategoryId: targetCategoryId,
                newCategoryName: newCategoryName
            },
            {withCredentials: true}
        )
    }

    public static async updateModuleContent(moduleId: number, type: string, content: any): Promise<AxiosResponse<void>> {
        return axiosInstance.put(
            `/dash/update-module?moduleId=${moduleId}`,
            {
                type: type,
                content: content
            },
            {withCredentials: true}
        )
    }

    public static async updateModuleLayout(moduleId: number, height: number, width: number, xAxis: number, yAxis: number): Promise<AxiosResponse<void>> {
        return axiosInstance.put(
            `/dash/update-module-layout?moduleId=${moduleId}`,
            {
                height: height,
                width: width,
                xAxis: xAxis,
                yAxis: yAxis
            },
            {withCredentials: true}
        )
    }

    public static async updateModuleLayoutBatch(categoryId: number, moduleLayouts: ModuleLayoutUpdateBatchDTO[]): Promise<AxiosResponse<void>> {
        return axiosInstance.put(
            `/dash/update-module-layout-batch?categoryId=${categoryId}`,
            {moduleLayouts: moduleLayouts},
            {
                withCredentials: true,
                headers: {'Content-Type': 'application/json'},
            }
        )
    }

    /*
     ********************************
     *                              *
     *---   /search ENDPOINTS    ---*
     *                              *
     ********************************
     */

    public static async findAnalystsThatCoverStock(targetStockId: number): Promise<AxiosResponse<OnlyfinProfileSubInfo[]>> {
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

    public static async pushReview(targetUsername: string, reviewText: string): Promise<AxiosResponse<string>> {
        return axiosInstance.put(
            "/reviews/push",
            {targetUsername, reviewText},
            {withCredentials: true}
        )
    }

    public static async deleteReview(targetUsername: string): Promise<AxiosResponse<void>> {
        return axiosInstance.delete(
            `/reviews/delete?targetUsername=${targetUsername}`,
            {withCredentials: true}
        )
    }

    public static async getReviews(targetUsername: string): Promise<AxiosResponse<OnlyfinReview[]>> {
        return axiosInstance.get(
            `/reviews/get?targetUsername=${targetUsername}`,
            {withCredentials: true},
        )
    }

    public static async getMyReview(targetUsername: string): Promise<AxiosResponse<OnlyfinReview>> {
        return axiosInstance.get(
            `/reviews/my-review?targetUsername=${targetUsername}`,
            {withCredentials: true}
        )
    }

}