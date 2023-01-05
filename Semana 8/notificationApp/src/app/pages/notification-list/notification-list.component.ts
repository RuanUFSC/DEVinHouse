import { Component, OnInit } from '@angular/core';
import { notifications } from './notifications';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {
  notifications = notifications;
  allNotifications = notifications;
  filter = '';
  tipo = '';
  markRead(notification: { read: boolean}){
    notification.read = !notification.read;
  }
  
  constructor(/*private router: Router,*/ private route: ActivatedRoute) {}

  filtro(botao: any){
    if(botao.tipo == 'Não Lidos') {
      this.tipo = 'nao-lidos'
    }
    console.log('botao: ', this.tipo);
//       if (botao.tipo == 'Lidos'){
//         this.notifications = this.allNotifications.filter(notification => {       
//           notification.read == true;
//           this.router.navigate([`/home/lidos`]);
//         })
//       } else if (botao.tipo == 'Não Lidos') {
//         this.notifications = this.allNotifications.filter(notification =>{
//           notification.read == false;
//           this.router.navigate([`/home/nao-lidos`]);
//         })
//       } else {
//         this.notifications = this.allNotifications;
//         this.router.navigate([`/home/todos`]);
//       }
 }

  ngOnInit(): void{
    this.route.params.subscribe((params) => {
      this.filter = params['filter'];
      console.log(this.filter)
    })
    
  }
}