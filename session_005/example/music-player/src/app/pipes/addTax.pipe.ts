import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: "addTax"
})
export default class AddTaxPipe implements PipeTransform
{
   transform(value: number, taxRate: number): number
   {
     let percent = value * (taxRate / 100);
     return value + percent;
   }
}
