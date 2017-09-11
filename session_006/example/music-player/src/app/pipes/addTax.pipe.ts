/**
 * Created by Yalovich on 03/09/2017.
 */
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'addTax'
})
export default class addTaxPipe implements PipeTransform
{
  transform(value: number, taxRate: number): number
  {
    if(typeof taxRate == "undefined") return value;
    return ((taxRate / 100) * value) + value;
  }
}
