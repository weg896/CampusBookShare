import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { BookTransaction } from '../Models/book-transaction';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageModal:ModalDirective;
  constructor() { }

  setModal(modal:ModalDirective){
    this.messageModal = modal;
  }

  showModal(){
    this.messageModal.show();
  }

}
