import { AUTH_DEBUG, BASE_URL, HttpResponse, HttpStatus } from "./default";

const register = async (formValues) => {
    const url = `${BASE_URL}/publications`
    var errorMessage;
    try {
        const options = {
            method: 'POST',
            body: JSON.stringify(
                {"title":formValues.title,
                    "content":formValues.content
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

const getPublications = async () => {
    const url = `${BASE_URL}/publications`
    try {
        const options = {
            method: 'GET',
            headers: {  
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        }

        const response = await fetch(url, options);
        if (response.ok) {
            const data = await response.json();
            AUTH_DEBUG && console.log("AuthAPI::getPublications(): ", data);
            return new HttpResponse(HttpStatus.OK, data);
        } else throw new Error("Error on getPublications()");
    } catch (error) {
        console.warn(error)
        return new HttpResponse(HttpStatus.ERROR, null);
    }
}

export const PublicationsAPI = {
    register,
    getPublications
}