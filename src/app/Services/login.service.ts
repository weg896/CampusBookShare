import { Injectable } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginModal:ModalDirective;

  constructor() { }

  setModal(modal:ModalDirective){
    this.loginModal = modal;
  }

  showModal(){
    this.loginModal.show();
  }

}
