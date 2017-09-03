import { Component } from '@angular/core';
import BandModel from "./models/band.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title: string = 'Gooovy Machine';
  bands: [BandModel];

  constructor()
  {
    this.bands = [
      new BandModel("Anderson", "http://www.okayplayer.com/wp-content/uploads/2016/06/25_AndersonPaak_02.jpg"),
      new BandModel("George", "http://cps-static.rovicorp.com/3/JPG_400/MI0001/396/MI0001396667.jpg?partner=allrovi.com"),
      new BandModel("Kendrick", "http://gonetworth.net/wp-content/uploads/2015/07/kendrick-lamar-net-worth2.jpg")
    ];

    this.bands[1].isBassPlayer = true;

    this.onPlay(this.bands[1]);
  }

  /**
   *
   * @param band
   * @param bandIndex
   */
  onPlay(band: BandModel, bandIndex?: number)
  {
    this.title = "Playing ".concat(band.name);
    console.log("Play -> ", this.bands[bandIndex], band);
  }

  /**
   *
   * @param event
   * @param band
   */
  onKeyup(event, band: BandModel)
  {
    if(event.which == 13) this.onPlay(band);
  }

  /**
   * return default name in case user has no name
   * @return {string}
   */
  getDefaultName(): string
  {
    return "Louis Armstrong";
  }

}
