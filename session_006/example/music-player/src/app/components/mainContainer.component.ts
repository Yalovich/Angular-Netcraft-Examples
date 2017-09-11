import { Component } from '@angular/core';

import BandModel from "../models/bandModel";
import ConcertModel from "../models/conecrtModel";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {UsesrService} from "../services/user.services";
import ApiService from "../services/api.service";

@Component({
  selector: 'main-container',
  templateUrl: './mainContainer.component.html',
  styleUrls: ['./mainContainer.component.css'],
  providers: [
    ApiService
  ]
})

export class MainContainerComponent {

  bands: [BandModel];
  bandsOnly: boolean = false;

  videoSource: SafeUrl;
  selected: BandModel;

  name: string;

  constructor(private sanitizer: DomSanitizer, private userService: UsesrService, private api: ApiService)
  {
    this.bands = [
      new BandModel("Anderson .Paak", "http://www.okayplayer.com/wp-content/uploads/2016/06/25_AndersonPaak_02.jpg", "1986-02-08"),
      new BandModel("George Clinton", "http://cps-static.rovicorp.com/3/JPG_400/MI0001/396/MI0001396667.jpg?partner=allrovi.com", "1941-07-22"),
      new BandModel("Kendrick Lamar", "http://gonetworth.net/wp-content/uploads/2015/07/kendrick-lamar-net-worth2.jpg", "1987-06-17")
    ];

    this.bands[0].addConcert(new ConcertModel(20, "TLV Live", "Levontin 7"));
    this.bands[0].addVideoUrl("https://www.youtube.com/embed/ferZnZ0_rSM");

    this.bands[1].addVideoUrl("https://www.youtube.com/embed/IodGZAx7FRs");
    this.bands[2].addVideoUrl("https://www.youtube.com/embed/hRK7PVJFbS8");

    this.videoSource = sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/_7T7XnkJP3M");
  }

  ngOnInit()
  {
    this.api.getBands()
  }

  /**
   *
   * @param band
   */
  onSelectToPlay(band: BandModel)
  {
    this.videoSource = this.sanitizer.bypassSecurityTrustResourceUrl(band.video);
    this.selected = band;
  }

  /**
   * save user's name as class property
   * @param event
   */
  saveName(event: any)
  {
    event.preventDefault();

    console.log("Save: ", this.name);

    this.userService.name = this.name;
  }

  saveUser(event: any)
  {
    this.api.saveUserDetails(this.userService.name);
  }
}

