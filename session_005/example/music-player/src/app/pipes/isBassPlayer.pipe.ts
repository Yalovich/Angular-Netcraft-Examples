import {Pipe, PipeTransform} from "@angular/core";
import BandModel from "../models/bandModel";

@Pipe({
  name: "isBassPlayer"
})
export default class IsBassPlayerPipe implements PipeTransform
{
  transform(value: [BandModel]): [BandModel]
  {
    let output: [BandModel];

    value.forEach(band => {

      if(band.isBassPlayer)
      {
        if(!output)
        {
          output = [band];
        }
        else
        {
          output.push(band);
        }
      }

    });

    return output;
  }
}

