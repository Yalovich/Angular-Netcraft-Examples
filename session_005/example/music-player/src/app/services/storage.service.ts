import {Injectable} from "@angular/core";

@Injectable()
export default class StorageService
{
  lastKey: string;

  constructor()
  {
    setInterval(() => {

      console.log("Service Instance");

    }, 2000);
  }

  /**
   *
   * @param name
   * @param element
   */
  saveElement(name: string, element: any)
  {
    localStorage.setItem(name, JSON.stringify(element));
    console.info("Saved: ", name, element);

    this.lastKey = name;
  }
}
