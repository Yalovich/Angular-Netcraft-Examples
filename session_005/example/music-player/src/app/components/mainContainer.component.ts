import { Component } from '@angular/core';

import BandModel from "../models/bandModel";
import ConcertModel from "../models/concert.model";
import UserModel from "../models/user.model";
import {DomSanitizer, SafeResourceUrl, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'main-container',
  templateUrl: './mainContainer.component.html',
  styleUrls: ['./mainContainer.component.css']
})

export class MainContainerComponent {

  bands: [BandModel];

  selectedBand: BandModel;
  dateFormat: string = "fullDate";

  videoUrl: SafeUrl;

  user: UserModel = new UserModel();

  firstName: string;

  constructor(private sanitizer: DomSanitizer)
  {
    this.bands = [
      new BandModel("Anderson .Paak", "http://www.okayplayer.com/wp-content/uploads/2016/06/25_AndersonPaak_02.jpg", "1986-02-08"),
      new BandModel("George Clinton", "http://cps-static.rovicorp.com/3/JPG_400/MI0001/396/MI0001396667.jpg?partner=allrovi.com", "1941-07-22"),
      new BandModel("Kendrick Lamar", "http://gonetworth.net/wp-content/uploads/2015/07/kendrick-lamar-net-worth2.jpg", "1987-06-17")
    ];

    this.bands[0].addConcert(new ConcertModel(40, "NY Concert", "2017-11-27"));
    this.bands[0].addConcert(new ConcertModel(75, "Paris C", "2017-12-03"));
    this.bands[0].addVideoUrl("https://www.youtube.com/embed/ferZnZ0_rSM");

    this.bands[1].setBassPlayer();
    this.bands[1].addVideoUrl("https://www.youtube.com/embed/EYIWebkeFMg");
  }

  /**
   *
   * @param bandModel
   */
  onPlayVideoFromBandCardNow(bandModel: BandModel)
  {
    console.log("MAIN-CONTAINER: ", bandModel);

    this.selectedBand = bandModel;

    this.firstName = this.selectedBand.name;

    this.videoUrl = this.sanitizer.bypassSecurityTrustUrl(this.selectedBand.videoUrl);
  }

  saveUser(event)
  {
    console.log(this.user);

    localStorage.setItem("user", JSON.stringify(this.user));
  }


  /**
   *
   * @param event
   */
  changeDateFormat(event: any)
  {
    this.dateFormat = this.dateFormat == "fullDate" ? "shortDate" : "fullDate";
  }
}

