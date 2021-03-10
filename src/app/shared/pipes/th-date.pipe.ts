import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thDate',
})
export class ThDatePipe implements PipeTransform {
  transform(value: string, args?: any): Date {
    const date = this.addHour(new Date(value), 7);
    return date;
  }

  addHour(date: Date, h: number) {
    date.setTime(date.getTime() + h * 60 * 60 * 1000);
    return date;
  }
}
