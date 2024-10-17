import { Pipe, PipeTransform } from '@angular/core';
import { Months } from '../enums/months.enum';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string): unknown {
    const dateSplit = value.split(' ');
    if(dateSplit.length !== 3) return value;
    return `${dateSplit[1].slice(0, -1)} de ${Months[dateSplit[0] as keyof typeof Months]} ${dateSplit[2]}`;
  }

}
