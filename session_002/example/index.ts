
/* importing products  */
import products from "./src/product";

/* types */
let isSaleAvailable: boolean = false; // Boolean

let price: number = 2000;
let discount: number = 25.30;

let color: string = "white";
let saleTagline: string = `Buy now! Just ${price} USD!`;

let customers: string[] = ["Idan", "Yam", "Tomer"];
let customersB: Array<string> = ["George", "Migel", "Yoav"];

enum availableColors {
    White, Black, Silver
}

var whoAmI: any = 20;
whoAmI = "I'm a string?";

let nothing: null; 

// ---------------

// non-ts or ecma function 
function sayHello(name) {
    console.log("Hi ".concat(name));
}

function sayYo(name: string): void {
    console.log("Yo ".concat(name));
}

setTimeout(function() {
    sayHello("Benjamin");
}, 2000);

setTimeout(() => {
    sayYo("Nick!");
}, 2000);

// ---------------



