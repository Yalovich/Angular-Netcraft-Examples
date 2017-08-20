import DomManager from "./domManager";
import DishModel, {DishesStorageKey} from "./dishModel";
import StorageManager from "./storageManager";

/**
 * main app class - boostrap the app
 */
class App
{
    domMgr: DomManager;
    storageMgr: StorageManager;
    fields: [string];

    constructor() {

        this.domMgr = new DomManager();
        this.storageMgr = new StorageManager();

        this.fields = ["name", "price", "type"];
    }

    /**
     *
     */
    boot()
    {
        this.loadSavedMenu();

        /* bind click to button */
        this.domMgr.elm(".buttons-wrapper button").addEventListener("click", event => {

            let dish = this.getDishModel();

            let allItems = this.storageMgr.read(DishesStorageKey, false);
            allItems = (allItems === false ? [] : JSON.parse(allItems));

            allItems.push(dish)

            this.storageMgr.write(DishesStorageKey, JSON.stringify(allItems));

        }, false);
    }

    /**
     * load saved menu if needed
     */
    loadSavedMenu()
    {
        let items = this.storageMgr.read(DishesStorageKey, false);

        /* abort when no saved items */
        if(items === false) return;

        items = JSON.parse(items);

        items.forEach((dish: DishModel) => {

            let item = `<li class="card"><h5>${dish.name}</h5><span>${dish.price} <small>EUR</small></span></li>`;
            this.domMgr.addChild(".menu", item);

            console.log(item);
        });
    }

    /**
     *
     * @return {DishModel}
     */
    getDishModel(): DishModel
    {
        return new DishModel(this.domMgr.inputElm("#name").value, parseInt(this.domMgr.inputElm("#price").value), parseInt(this.domMgr.inputElm("#type").value));
    }


}

const app = new App();
app.boot();