import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { MessageService } from '../../Services/message.service';
import { BookTransaction } from '../../Models/book-transaction';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @ViewChild("messageModal") messageModal:ModalDirective;
  constructor(private messageModalService:MessageService) { }

  testOwnerObject:BookTransaction = new BookTransaction();

  ngOnInit() {
    this.messageModalService.setModal(this.messageModal, this.testOwnerObject);
  }
}
