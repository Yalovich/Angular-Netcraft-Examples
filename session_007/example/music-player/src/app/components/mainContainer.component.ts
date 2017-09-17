import { Component } from '@angular/core';

import BandModel from "../models/bandModel";
import ConcertModel from "../models/conecrtModel";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {UserService} from "../services/user.services";
import ApiService from "../services/api.service";
import {ActivatedRoute} from "@angular/router";

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

  constructor(private sanitizer: DomSanitizer, private userService: UserService, private api: ApiService, private router: ActivatedRoute) {

    router.data.subscribe(data => {
      document.title = data['title'];
    });

    router.queryParamMap.subscribe(url => {
      console.log(url);
    });
  }

  /**
   * loading bands's details
   * @return void
   */
  ngOnInit()
  {
    this.api.getBands().subscribe(response => { this.bands = response; });
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
  saveUser(event: any)
  {
    event.preventDefault();
    this.userService.set('name', this.name);
  }
}

