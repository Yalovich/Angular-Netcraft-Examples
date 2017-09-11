import {Component, Input, EventEmitter, Output} from '@angular/core';
import BandModel from "../models/bandModel";

@Component({
  selector: 'band-card',
  templateUrl: './bandCard.component.html',
  styleUrls: ['./bandCard.component.css'],
  inputs: ["band"]
})
export class BandCardComponent {

  band: BandModel;

  @Output()
  onSelectToPlay: EventEmitter<BandModel> = new EventEmitter<BandModel>();

  /**
   * moving up the selected band
   * @param event
   */
  selectBand(event: any)
  {
    this.onSelectToPlay.emit(this.band);
  }
}

