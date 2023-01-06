import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { notifications } from './notifications';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit{
  notifications: any = notifications;
  filteredNotifications: any = [];
  chosenFilter = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){  }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.chosenFilter = params['routeFilter'];

      this.filteredNotifications = [];
      this.notifications.forEach((notification: any) => {
        if (this.chosenFilter === 'lidos') {
          if (notification.read) {
            this.filteredNotifications.push(notification)
          }
        }
        if (this.chosenFilter === 'nao-lidos') {
          if(!notification.read) {
            this.filteredNotifications.push(notification)
          }
        }
        if (this.chosenFilter === 'todos') {
          this.filteredNotifications = [...this.notifications]
        }
      })
    })
  }
    
  markRead(notification: { read: boolean}){
    notification.read = !notification.read;
  }
  
  filter(eventButton: any){
    if (eventButton === 'Não Lidos') eventButton = 'nao-lidos';
    this.router.navigate(['/home/' + eventButton.toLowerCase()]);
  }

}