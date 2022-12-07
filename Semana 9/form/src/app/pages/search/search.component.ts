import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'formu-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {
  
  @Output()  nomeDaAcao: EventEmitter<any> = new EventEmitter();

  text: any= "";
  enviar(){
    this.nomeDaAcao.emit(this.text);
  }
}
