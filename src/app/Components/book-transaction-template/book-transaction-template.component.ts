import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from '../../Services/message.service';
import { BookTransaction } from '../../Models/book-transaction';
import { CookieService } from 'ngx-cookie-service';
import { CurrentUser } from 'src/app/Models/current-user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-book-transaction-template',
  templateUrl: './book-transaction-template.component.html',
  styleUrls: ['./book-transaction-template.component.scss']
})
export class BookTransactionTemplateComponent implements OnInit {

  constructor(
    private messageModalService:MessageService,
    private toastr:ToastrService) {  }

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
  @Input('cssButton') cssButton:string;
  @Input('cssText') cssText:string;
  @Input('isLogin') isLogin:boolean;


  showMessageModal(){
    if(this.isLogin){
      console.log('by person'+this.byPerson);
      CurrentUser.setContacter(this.byPerson);
      this.messageModalService.showModal();
    }else{
      this.toastr.info('Please login ');
    }
  }


  buttonOperation(){
    if(this.isLogin){
      if(this.borrowOrHelp.localeCompare("Help") == 0){
        this.toastr.success("thank you for your help")
      }else{
        this.toastr.success("You have added to the borrow list");
      }
    }else{
      this.toastr.info('Please login ');
    }
  }
}
