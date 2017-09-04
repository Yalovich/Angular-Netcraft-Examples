import {Component, Input, EventEmitter, Output} from '@angular/core';
import BandModel from "../models/bandModel";
import StorageService from "../services/storage.service";

@Component({
  selector: 'band-card',
  templateUrl: './bandCard.component.html',
  styleUrls: ['./bandCard.component.css'],
  providers: [
    StorageService
  ]
})
export default class BandCardComponent
{
  @Input()
  bandInput: BandModel;

  @Output()
  playVideo: EventEmitter<BandModel> = new EventEmitter();

  constructor(private storage: StorageService)
  {
    // console.log("hello", this.bandInput);
  }

  /**
   *
   * @param event
   */
  onPlayVideo(event: any)
  {
    this.playVideo.emit(this.bandInput);

    this.storage.saveElement("SelectedBane", this.bandInput);
  }

  ngOnInit()
  {
    // console.log(this.bandInput);
  }
}
