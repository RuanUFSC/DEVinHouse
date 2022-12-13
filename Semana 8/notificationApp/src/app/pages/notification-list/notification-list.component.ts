import { Component } from '@angular/core';
import { notifications } from './notifications';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  notifications = notifications;
  allNotifications = notifications;
  markRead(notification: { read: boolean}){
    notification.read = !notification.read;
  }
  
  filtro(botao: any){
      if (botao.tipo == 'Lidos'){
        this.notifications = this.allNotifications.filter(notification =>        
          notification.read == true
        )
      } else if (botao.tipo == 'Não Lidos') {
        this.notifications = this.allNotifications.filter(notification =>
          notification.read == false
        )
      } else {
        this.notifications = this.allNotifications;
      }
 }
}