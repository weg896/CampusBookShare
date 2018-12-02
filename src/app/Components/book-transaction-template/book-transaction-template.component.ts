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

  @Input('byPerson') byPerson:string;
  @Input('shareOrRequest') shareOrRequest:string;
  @Input('borrowOrHelp') borrowOrHelp:string;
  @Input('bookName') bookName:string;
  @Input('author') author:string;
  @Input('postTime') postTime:string;
  @Input('expectReturnTime') expectReturnTime:string;
  @Input('description') description:string;


  showMessageModal(){
    this.messageModalService.showModal(this.byPerson);
  }

}
