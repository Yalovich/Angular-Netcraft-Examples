/**
 * Created by Yalovich on 19/08/2017.
 */

import Api, {ApiResponse, ApiError} from "./api";

const api = new Api();

class App
{
    /**
     * booting the entire app
     */
    boot()
    {
        console.log("Hello");

        api.getMenu().then((menu: ApiResponse)=> {

            console.log(" ---> ", menu);

        }, (error: ApiError) => {

            // handler for error

            console.log("Error: ", error);

        }).catch( error => {

            // handler for unexcpected error

            console.log("Error: ", error);

        });
    }
}


const app = new App();
app.boot();




