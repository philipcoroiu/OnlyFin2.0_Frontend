import axios, {AxiosError} from 'axios';

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
    public static async postRegisterNewUser(email: String, username: String, password: String ) : Promise<boolean> {
        let registerSuccess : boolean = false;

        await axios.post(process.env.NEXT_PUBLIC_BACKEND+"/users/register",
            {
                email: email,
                username: username,
                password: password
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            .then(response => {
                registerSuccess = true
            })
            .catch(error => {
                handleError(error)
            }
        );
        return registerSuccess
    }

    public static async postLoginPlz(username : String, password : String) : Promise<boolean>{
        let loginSuccess : boolean = false;

        await axios.post(process.env.NEXT_PUBLIC_BACKEND+"/plz",
            `username=${username}&password=${password}`
            ,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                withCredentials: true
            })
            .then(response => {
                loginSuccess = true
            })
            .catch(error => {
                    handleError(error)
                }
            );

        return loginSuccess
    }

    public static async findAll() : Promise<any>{
        await axios.get(process.env.NEXT_PUBLIC_BACKEND+"/users/search/all", {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
        .then((response) => {
            return response;
        })
        .catch(error => {
            handleError(error)
        })
    }

    public static async findByUserName(username : String) : Promise<any>{
        await axios.get(process.env.NEXT_PUBLIC_BACKEND+`/users/username?username=${username}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
        .then((response) => {
            return response;
        })
        .catch(error => {
            handleError(error)
        })
    }

    public static async searchByUserName(username : String) : Promise<any>{
        await axios.get(process.env.NEXT_PUBLIC_BACKEND+`/users/search/username?username=${username}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        })
        .then((response) => {
            return response;
        })
        .catch(error => {
            handleError(error)
        })
    }

    public static async whoAmI(): Promise<any> {
        try {
            const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND+"/users/whoami", {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            if(response.status === 204) {
                return { error: '204' }
            } else {
                return response;
            }
        } catch (error) {
            handleError(error);
        }
    }

    public static async searchAllUsers(): Promise<any> {
        try {
            const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND+"/users/search/all", {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            return response.data;
        } catch(error) {
            handleError(error)
        }
    }

    public static async logOut() {
        try {
            await axios.post(process.env.NEXT_PUBLIC_BACKEND+"/logout",
                {},
                {
                withCredentials: true
            })
        } catch(error) {

        }
    }

    //Add more endpoints here
}


