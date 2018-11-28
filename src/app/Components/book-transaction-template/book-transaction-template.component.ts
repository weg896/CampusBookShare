import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../../Services/message.service';
import { BookTransaction } from '../../Models/book-transaction';

@Component({
  selector: 'app-book-transaction-template',
  templateUrl: './book-transaction-template.component.html',
  styleUrls: ['./book-transaction-template.component.scss']
})
export class BookTransactionTemplateComponent implements OnInit {

  constructor(private messageModalService:MessageService) {  }

  ngOnInit() {
  }

  @Input('testOwner') testOwner:string;


  showMessageModal(){
    this.messageModalService.showModal(this.testOwner);
  }

}
