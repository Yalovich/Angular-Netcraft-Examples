/**
 * Created by Yalovich on 19/08/2017.
 */
"use strict";
const ENDPOINT = "http://localhost:3000";
class ApiError {
    constructor(message, code) {
        this.message = message;
        this.code = code;
    }
}
exports.ApiError = ApiError;
class ApiResponse {
    constructor(message, code) {
        this.message = message;
        this.code = code;
    }
}
exports.ApiResponse = ApiResponse;
class Api {
    /**
     * Perform simple HTTP GET request
     */
    getMenu() {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.addEventListener("load", () => {
                /* validate request status */
                if (request.status == 200)
                    return resolve(new ApiResponse(JSON.parse(request.responseText), request.status));
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Api;
const HTTP_VERBS = {
    POST: "post",
    GET: "get",
    DELETE: "delete",
    PUT: "put",
    OPTIONS: "options"
};
exports.VERBS = HTTP_VERBS;
//# sourceMappingURL=api.js.map