import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import BandModel from "../models/bandModel";

@Injectable()
export default class ApiService
{
  endpoint: string;

  constructor(private httpClient: HttpClient){
    this.endpoint = "http://localhost:3000";
  }

  /**
   *
   */
  getBands()
  {
    return this.httpClient.get<[BandModel]>(this.endpoint.concat("/bands"));
  }

  saveUserDetails(user)
  {
    this.httpClient.post(this.endpoint.concat("/user"), {
      nane: "Idan Yalovich"
    }).subscribe();
  }
}
