import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'formu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  title = 'form';
  contador = 0;
  verify: String = '';
  constructor() {}
    negativeVerify(numero: Number){
      if(numero == 0) {
        this.verify = 'zero';
      } else if(numero < 0) {
        this.verify = 'negative';
      } else {
        this.verify = 'positive';
      }
    }
    subtrair() {
      this.contador--;
    }
  
    somar() {
      this.contador++;
    }
    titulo = 'batatinha';
    descricao = 'frita';

    ngOnInit() {}
}


