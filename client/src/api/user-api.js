import { HttpResponse, HttpStatus, BASE_URL, USER_URL, AUTH_URL } from "./default";
import { AUTH_DEBUG } from "./default";

const register = async (formValues) => {
    const url = `${USER_URL}/users`
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

const getUsers = async () => {
    const url = `${USER_URL}/users`;
    const token = localStorage.getItem('token'); // Recupera o token do localStorage
    var errorMessage;
    try {
        const options = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Authorization': `Bearer ${token}` // Adiciona o token ao cabeçalho
            }
        };

        const response = await fetch(url, options);
        if (response.ok) {
            const data = await response.json();
            AUTH_DEBUG && console.log("AuthAPI::getUsers(): ", data);
            return new HttpResponse(HttpStatus.OK, data);
        } else {
            errorMessage = await response.json();
            throw new Error("Error on getUsers()");
        }
    } catch (error) {
        console.warn(error);
        return new HttpResponse(HttpStatus.ERROR, errorMessage);
    }
};

const login = async (email, password) => {
    const url = `${AUTH_URL}/auth/sign-in`
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
    register,
    getUsers
}