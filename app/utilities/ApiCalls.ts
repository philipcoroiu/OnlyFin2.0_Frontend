import axios from 'axios';
import {promises} from "dns";


class UserDTO {
    private email: String
    private username: String
    private password: String
    constructor(email: String, username: String, password : String ) {
        this.email = email
        this.username = username
        this.password = password
    }
}

function handleError(error: any) {
    console.log('There was an error in the API call ', error)
}

class ApiCalls{

    public async postRegisterNewUser(userDTO: UserDTO ) : Promise<boolean> {
        let registerSuccess : boolean = false;

        await axios.post("http://localhost:8080/users/register",
            {
                userDTO
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

    public async postLoginPlz(email : String, password : String) : Promise<boolean>{
        let loginSuccess : boolean = false;

        await axios.post("http://localhost:8080/plz",
            {
                email : email,
                password : password
            },
            {
                headers: {
                    'Content-Type': 'application/json'
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
}


