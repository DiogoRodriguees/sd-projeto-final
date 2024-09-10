import { HttpResponse, HttpStatus, BASE_URL } from "./default";
import { AUTH_DEBUG } from "./default";

const register = async (formValues) => {
    const url = `${BASE_URL}/users`
    var errorMessage;
    try {
        const options = {
            method: 'POST',
            body: JSON.stringify(
                {"username":formValues.username,
                    "email":formValues.email,
                    "password":formValues.password,
                }
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }

        const response = await fetch(url, options);
        if (response.ok) {
            const data = await response.json();
            AUTH_DEBUG && console.log("AuthAPI::Register(): ", data.token);
            return new HttpResponse(HttpStatus.OK, data);
        } else {
            errorMessage = await response.json();
            throw new Error("Error on Register()")
        }
    } catch (error) {
        console.warn(error)
        return new HttpResponse(HttpStatus.ERROR, errorMessage);
    }
}


const login = async (email, password) => {
    const url = 'https://dummyjson.com/auth/login'
    var errorMessage;
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                "username": email,
                "password": password
              })
        }

        const response = await fetch(url, options);
        if (response.ok) {
            const data = await response.json();
            AUTH_DEBUG && console.log("AuthAPI::login(): ", data.token);
            return new HttpResponse(HttpStatus.OK, data);
        } else {
            errorMessage = await response.json();
            throw new Error("Error on login()")
        }
    } catch (error) {
        console.warn(error)
        return new HttpResponse(HttpStatus.ERROR, errorMessage);
    }
}

export const UserAPI = {
    login,
    register
}