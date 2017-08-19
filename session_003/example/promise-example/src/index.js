/**
 * Created by Yalovich on 19/08/2017.
 */
"use strict";
const api_1 = require("./api");
const api = new api_1.default();
class App {
    /**
     * booting the entire app
     */
    boot() {
        console.log("Hello");
        api.getMenu().then((menu) => {
            console.log(menu);
        }, (error) => {
            // handler for error
        }).catch(error => {
            // handler for unexcpected error
        });
    }
}
const app = new App();
app.boot();
//# sourceMappingURL=index.js.map