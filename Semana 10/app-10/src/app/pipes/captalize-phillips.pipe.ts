import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'captalizePhillips'
})
export class CaptalizePhillipsPipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      return value.replace(/\b\w/g, l => l.toUpperCase());
    }
    return value;
  }

}
