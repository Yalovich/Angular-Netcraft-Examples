/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by Yalovich on 19/08/2017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = __webpack_require__(1);
const api = new api_1.default();
class App {
    /**
     * booting the entire app
     */
    boot() {
        console.log("Hello");
        api.getMenu().then((menu) => {
            console.log(" ---> ", menu);
        }, (error) => {
            // handler for error
            console.log("Error: ", error);
        }).catch(error => {
            // handler for unexcpected error
            console.log("Error: ", error);
        });
    }
}
const app = new App();
app.boot();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by Yalovich on 19/08/2017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Api;
const HTTP_VERBS = {
    POST: "post",
    GET: "get",
    DELETE: "delete",
    PUT: "put",
    OPTIONS: "options"
};
exports.VERBS = HTTP_VERBS;


/***/ })
/******/ ]);