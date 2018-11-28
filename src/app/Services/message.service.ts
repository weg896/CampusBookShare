import { Injectable } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { BookTransaction } from '../Models/book-transaction';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messageModal:ModalDirective;
  constructor() { }

  testOwnerObj:BookTransaction;
  setModal(modal:ModalDirective, testOwnerObj:BookTransaction){
    this.messageModal = modal;
    this.testOwnerObj = testOwnerObj;
  }

  showModal(testowner:string){
    this.messageModal.show();
    this.testOwnerObj.book_owner = testowner;
  }
}
