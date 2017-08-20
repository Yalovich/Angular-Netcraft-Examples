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

Object.defineProperty(exports, "__esModule", { value: true });
const domManager_1 = __webpack_require__(1);
const dishModel_1 = __webpack_require__(2);
const storageManager_1 = __webpack_require__(3);
/**
 * main app class - boostrap the app
 */
class App {
    constructor() {
        this.domMgr = new domManager_1.default();
        this.storageMgr = new storageManager_1.default();
        this.fields = ["name", "price", "type"];
    }
    /**
     *
     */
    boot() {
        this.loadSavedMenu();
        /* bind click to button */
        this.domMgr.elm(".buttons-wrapper button").addEventListener("click", event => {
            let dish = this.getDishModel();
            let allItems = this.storageMgr.read(dishModel_1.DishesStorageKey, false);
            allItems = (allItems === false ? [] : JSON.parse(allItems));
            allItems.push(dish);
            this.storageMgr.write(dishModel_1.DishesStorageKey, JSON.stringify(allItems));
        }, false);
    }
    /**
     * load saved menu if needed
     */
    loadSavedMenu() {
        let items = this.storageMgr.read(dishModel_1.DishesStorageKey, false);
        /* abort when no saved items */
        if (items === false)
            return;
        items = JSON.parse(items);
        items.forEach((dish) => {
            let item = `<li class="card"><h5>${dish.name}</h5><span>${dish.price} <small>EUR</small></span></li>`;
            this.domMgr.addChild(".menu", item);
            console.log(item);
        });
    }
    /**
     *
     * @return {DishModel}
     */
    getDishModel() {
        return new dishModel_1.default(this.domMgr.inputElm("#name").value, parseInt(this.domMgr.inputElm("#price").value), parseInt(this.domMgr.inputElm("#type").value));
    }
}
const app = new App();
app.boot();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DomManager {
    /**
     * Select single element using query selector
     * @param selector
     * @return {Element}
     */
    elm(selector) {
        return document.querySelector(selector);
    }
    /**
     *
     * @param parent
     * @param html
     */
    addChild(parentSelector, html) {
        let parent = this.elm(parentSelector);
        parent.appendChild(document.createRange().createContextualFragment(html));
        return parent;
    }
    /**
     * return input element
     * @param selector
     * @return {HTMLInputElement}
     */
    inputElm(selector) {
        return document.querySelector(selector);
    }
}
exports.default = DomManager;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Types;
(function (Types) {
    Types[Types["Appetizer"] = 1] = "Appetizer";
    Types[Types["MainCourse"] = 2] = "MainCourse";
    Types[Types["Dessert"] = 3] = "Dessert";
})(Types || (Types = {}));
exports.DishTypes = Types;
const DishesStorageKey = "dish";
exports.DishesStorageKey = DishesStorageKey;
class DishModel {
    constructor(name, price, type) {
        if (name != null)
            this.name = name;
        if (price != null)
            this.price = price;
        if (type != null)
            this.type = type;
    }
    /**
     * return model as JSON string
     * @return {string}
     */
    json() {
        return JSON.stringify(this);
    }
}
exports.default = DishModel;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class StorageManager {
    /**
     * write any value to localStroage
     * @param key
     * @param value
     * @return {StorageManager}
     */
    write(key, value) {
        localStorage.setItem(key, value);
        return this;
    }
    /**
     * read item from localStorage or return supplied default value
     * @param key
     * @param defaultReturn
     */
    read(key, defaultReturn) {
        return (localStorage.getItem(key) ? localStorage.getItem(key) : (defaultReturn != null ? defaultReturn : null));
    }
}
exports.default = StorageManager;


/***/ })
/******/ ]);