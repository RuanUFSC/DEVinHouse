import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ntap-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  statusButtons = ['Todos', 'Não Lidos', 'Lidos'];
  @Output() filterEvent = new EventEmitter<any>();
  filtrar(button: string){
    this.filterEvent.emit(button)
  }
}
