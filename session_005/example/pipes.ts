import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'addTax'
})
export class AddTaxPipe implements PipeTransform 
{
    /**
     * Required method - will be executed during runtime
     * @param value 
     * @param exponent 
     */
    transform(value: number): number {
        return (value * 0.17) + value;
    }
}


