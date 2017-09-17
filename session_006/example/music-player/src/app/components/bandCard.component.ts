import {Component, Input, EventEmitter, Output, ElementRef, SimpleChanges} from '@angular/core';
import BandModel from "../models/bandModel";

@Component({
  selector: 'band-card',
  templateUrl: './bandCard.component.html',
  styleUrls: ['./bandCard.component.css']
})
export class BandCardComponent {

  @Input()
  band: BandModel;

  @Output()
  onSelectToPlay: EventEmitter<BandModel> = new EventEmitter<BandModel>();

  constructor(private ref: ElementRef)
  {
    // console.log("Hook #1", this.band);
  }

  ngOnChanges(change: SimpleChanges)
  {
    // console.log("Hook #2", change, this.ref.nativeElement);


  }

  ngOnInit()
  {
    // console.log("Hook #3", this.band);

  }

  ngDoCheck()
  {
    // console.log("Hooked. Checked");
  }

  ngOnDestroy()
  {
    // console.log("Hook #4");


  }


  /**
   * moving up the selected band
   * @param event
   */
  selectBand(event: any)
  {
    this.onSelectToPlay.emit(this.band);
  }
}

