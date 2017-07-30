var productsList = {
    iPhone: 3000,
    Samsung: 2800,
    PixelByGoogle: 3000
};

var productName = ["iPhone", "Samsung", "Pixel"];
var productFirm = {
    iPhone: "Apple",
    Pixel: "Google"
};



class Product 
{
    private name: string;
    private price: number;

    constructor(name?: string, price?: number)
    {
        if(name != null) this.name = name;

        if(price != null) this.price = price;
    }

    /**
     * return product price
     * @return number
     */
    getPrice(): number
    {
        return (this.price != null ? this.price : 0);
    }

    /**
     * return product name
     * @return string
     */
    getName(): string
    {
        return (this.name != null ? this.name : "N/A");
    }
}


export default productsList;

export {
    Product,
    productsList as list,
    productName as names,
    productFirm as firms
};