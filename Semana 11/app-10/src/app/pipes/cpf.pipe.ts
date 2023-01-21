import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf'
})
export class CpfPipe implements PipeTransform {

  transform(value: string | number, hide: boolean = false): string {
    let cpf = value.toString().padStart(11, '0');
    if (hide) {
      cpf = '***' + cpf.substr(3, 6) + '**';
    }
    return cpf;
  }

}
