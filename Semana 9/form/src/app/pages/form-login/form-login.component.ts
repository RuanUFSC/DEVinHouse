import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'formu-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent {

  constructor(private localStorage: LocalStorageService) {}

  saveLogin(email: string, password: string) {
    this.localStorage.saveDataLogin({ email, password });
  }

}
