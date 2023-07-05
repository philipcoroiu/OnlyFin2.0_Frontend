import axios, {AxiosError} from 'axios';


//TODO test this class and the endpoints in it

//Error handling (currently only displays the error?)
function handleError(error: any) {
    console.log('There was an error in the API call ', error)
}


//to use this class in other classes write
// import {ApiCalls} from "@/app/utilities/ApiCalls";
// and to call functions write ApiCalls.{function name}

export class ApiCalls{

    //Static function is created for each endpoint from the backend
    public static async postRegisterNewUser(email: String, username: String, password: String ) : Promise<boolean> {
        let registerSuccess : boolean = false;

        await axios.post("http://localhost:8080/users/register",
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

        await axios.post("http://localhost:8080/plz",
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
        await axios.get("http://localhost:8080/users/search/all", {
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
        await axios.get(`http://localhost:8080/users/username?username=${username}`, {
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
        await axios.get(`http://localhost:8080/users/search/username?username=${username}`, {
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
            const response = await axios.get(`http://localhost:8080/users/whoami`, {
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
            const response = await axios.get(`http://localhost:8080/users/search/all`, {
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
            await axios.post(`http://localhost:8080/logout`, {
                withCredentials: true
            })
        } catch(error) {

        }
    }

    //Add more endpoints here
}


