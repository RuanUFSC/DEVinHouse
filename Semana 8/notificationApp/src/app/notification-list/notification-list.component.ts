import { Component } from '@angular/core';
import { notifications } from './notifications';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  notifications = notifications;
  markRead(notification: { read: boolean}){
    if(notification.read) { 
      notification.read = false 
    }
    else {
      notification.read = true 
    };
  }
}