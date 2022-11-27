import { Component } from '@angular/core';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  notifications = [
    { 
      title: 'Instagram',
      desc:'Elon Musk curtiu sua publicação',
      time:'1 min ago'
    },
    {  
      title: 'WhatsApp',
      desc:'Mãe: Tudo bem?',
      time:'5 min ago'
    },
    {  
      title: 'Linkedin',
      desc:'3 empregos encontrados em Worldwide',
      time:'7 min ago'
    },
    {  
      title: 'Linkedin',
      desc:'1 emprego encontrado em Biguacu',
      time:'10 min ago'
    },
    {  
      title: 'Linkedin',
      desc:'2 empregos encontrados em Florianopolis',
      time:'12 min ago'
    }
  ]
}
