import { Component, Input } from '@angular/core';

@Component({
  selector: 'formu-itemCard',
  templateUrl: './itemCard.component.html',
  styleUrls: ['./itemCard.component.scss']
})
export class ItemCardComponent {
  @Input() personagem: any = "";
}
