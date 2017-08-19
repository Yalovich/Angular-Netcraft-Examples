/**
 * Created by Yalovich on 19/08/2017.
 */

const ENDPOINT = "http://localhost:3000";

class ApiError
{
    constructor(public message: string, public code: number){}
}

class ApiResponse
{
    constructor(public message: any, public code: number){}
}

export default class Api
{
    /**
     * Perform simple HTTP GET request
     */
    getMenu()
    {
        return new Promise<ApiResponse>((resolve, reject) => {

            const request: XMLHttpRequest = new XMLHttpRequest();

            request.addEventListener("load", () => {

                /* validate request status */
                if(request.status == 200) return resolve(new ApiResponse(JSON.parse(request.responseText), request.status));

                reject(new ApiError(request.statusText, request.status));

            }, false);

            request.addEventListener("error", () => {
                reject(new ApiError(request.statusText, request.status));
            }, false);


            request.open('GET', ENDPOINT.concat("/menu"));
            request.send();
        });
    }
}

const HTTP_VERBS = {
    POST: "post",
    GET: "get",
    DELETE: "delete",
    PUT: "put",
    OPTIONS: "options"
};

export {
    ApiResponse,
    ApiError,
    HTTP_VERBS as VERBS
}