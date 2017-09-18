import {Pipe, PipeTransform} from "@angular/core";
import BandModel from "../models/bandModel";

@Pipe({
  name: "concert"
})
export default class ConcertPipe implements PipeTransform
{
    transform(bands: [BandModel], bandOnly: string): any
    {
        if(!bandOnly) return bands;

        let output = [];

        bands.forEach((band: BandModel) => {

          if(band.upComingCocnerts && band.upComingCocnerts.length > 0) output.push(band);

        });

        return output;
    }
}
