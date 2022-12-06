import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  saveDataLogin(object = {}) {
    localStorage.setItem('data', JSON.stringify(object));
  }
}
