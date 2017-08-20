
enum Types
{
    Appetizer = 1,
    MainCourse = 2,
    Dessert = 3
}

const DishesStorageKey = "dish";

export default class DishModel
{
    name: string;
    price: number;
    type: Types;

    constructor(name?: string, price?: number, type?: Types)
    {
        if(name != null) this.name = name;

        if(price != null) this.price = price;

        if(type != null) this.type = type;
    }

    /**
     * return model as JSON string
     * @return {string}
     */
    json(): string
    {
        return JSON.stringify(this);
    }
}

export {
    Types as DishTypes,
    DishesStorageKey
}