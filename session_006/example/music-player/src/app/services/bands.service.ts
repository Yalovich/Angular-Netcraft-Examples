import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import BandModel from "../models/bandModel";

@Injectable()
export default class BandsService
{
  endpoint: string;

  bands: [BandModel];

  constructor(private httpClient: HttpClient)
  {
    this.endpoint = "http://localhost:3000";
  }

  /**
   *
   */
  getBands(): Promise<[BandModel]>
  {
    return new Promise((resolve, reject) => {


      if(this.bands && this.bands.length > 0)
      {
        console.log("CACHE REQUEST");
        return resolve(this.bands);
      }

      console.log("HTTP REQUEST");
      this.httpClient.get<[BandModel]>(`${this.endpoint}/bands`).subscribe(data => {

        this.bands = data;
        resolve(this.bands);

      }, (error: Error) => {

        reject(error);

      });
    });

  }
}
