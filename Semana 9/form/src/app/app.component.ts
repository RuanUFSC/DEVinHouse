import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'formu-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  personagem: any = {
    nome: 'Black Mirror',
    imagem: 'https://styles.redditmedia.com/t5_2v08h/styles/communityIcon_6clakkbqhlf51.png?width=256&s=1bc221916461b9876f6368e6adb3230fae636d4a',
    nomeAtor: 'Tecnologia',
    descricao:
      'Centrada em temas obscuros e satíricos que examinam a sociedade moderna, particularmente a respeito das consequências imprevistas das novas tecnologias. Os episódios são trabalhos autônomos, que geralmente se passam em um presente alternativo ou em um futuro próximo.',
  };
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


