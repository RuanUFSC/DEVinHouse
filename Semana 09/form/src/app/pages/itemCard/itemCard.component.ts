import { Component, Input } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'formu-itemCard',
  templateUrl: './itemCard.component.html',
  styleUrls: ['./itemCard.component.scss']
})
export class ItemCardComponent {
  @Input() personagem: any = "";

  constructor() {}
  ngOnInit(){}

}
