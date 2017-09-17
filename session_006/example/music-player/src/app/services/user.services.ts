
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UsesrService
{
  endpoint: string;

  name: string;
  savedItems: number = 0;

  constructor(private httpClient: HttpClient){
    this.endpoint = "http://localhost:3000";
  }

  increaseSavedItems()
  {
    this.savedItems++;
  }

  /**
   *
   * @param name
   */
  saveUser(name: string)
  {
    let saveUrl: string = `${this.endpoint}/user`;

    this.httpClient.post(saveUrl, {
      params: {
        userName: name
      }
    }).subscribe();
  }
}
