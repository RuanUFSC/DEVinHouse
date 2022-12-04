import { Component } from '@angular/core';

@Component({
  selector: 'formu-itemCard',
  templateUrl: './itemCard.component.html',
  styleUrls: ['./itemCard.component.scss']
})
export class ItemCardComponent {
  personagem: any = {
    nome: 'Black Mirror',
    imagem: 'https://styles.redditmedia.com/t5_2v08h/styles/communityIcon_6clakkbqhlf51.png?width=256&s=1bc221916461b9876f6368e6adb3230fae636d4a',
    nomeAtor: 'Tecnologia',
    descricao:
      'Centrada em temas obscuros e satíricos que examinam a sociedade moderna, particularmente a respeito das consequências imprevistas das novas tecnologias. Os episódios são trabalhos autônomos, que geralmente se passam em um presente alternativo ou em um futuro próximo.',
  };
}
