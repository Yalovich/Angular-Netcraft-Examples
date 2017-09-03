import { Component } from '@angular/core';

import BandModel from "../models/bandModel";

@Component({
  selector: 'main-container',
  templateUrl: './mainContainer.component.html',
  styleUrls: ['./mainContainer.component.css']
})

export class MainContainerComponent {

  bands: [BandModel];

  constructor()
  {
    this.bands = [
      new BandModel("Anderson .Paak", "http://www.okayplayer.com/wp-content/uploads/2016/06/25_AndersonPaak_02.jpg", "1986-02-08"),
      new BandModel("George Clinton", "http://cps-static.rovicorp.com/3/JPG_400/MI0001/396/MI0001396667.jpg?partner=allrovi.com", "1941-07-22"),
      new BandModel("Kendrick Lamar", "http://gonetworth.net/wp-content/uploads/2015/07/kendrick-lamar-net-worth2.jpg", "1987-06-17")
    ];
  }
}

