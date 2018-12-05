import { Component, OnInit, ViewChild, Input, ComponentFactoryResolver } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md';
import { MessageService } from '../../Services/message.service';
import { BookTransaction } from '../../Models/book-transaction';
import { CurrentUser } from 'src/app/Models/current-user';
import { ToastrService } from 'ngx-toastr';
import { FormControl } from '@angular/forms';
import { BackendService } from 'src/app/Services/backend.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @ViewChild("messageModal") messageModal:ModalDirective;

  constructor(
    private messageModalService:MessageService, 
    private toastr:ToastrService,
    private backendInstance:BackendService) { }

  @Input() contacter:string;
  messageInput:FormControl = new FormControl("");
  ngOnInit() {
    this.messageModalService.setModal(this.messageModal);
  }

  onOpen(event:any){
    this.contacter = CurrentUser.getContacter();
    console.log("cont :" +this.contacter);
  }

  closeMessageModal(){
    CurrentUser.destoryContacter();
    this.messageModal.hide();
  }


  sendMessage(){
      if(CurrentUser.isLogin()){

        var tempPara2 = "{"+
          '"Content":"' + this.messageInput.value + '",' +
          '"Receiver":"'+CurrentUser.getContacter() + '",' +
          '"Sender":"'+CurrentUser.getUsername() + '"}';
  
        console.debug(tempPara2.toString());
        return;
        this.backendInstance.postFunction(BackendService.MESSAGER, tempPara2).subscribe(
          (res)=>{
            console.debug(typeof res);
            console.debug(res);
            if(res.Id){
              this.toastr.success('successfully send a message to ' +CurrentUser.getContacter());
            }else{
              this.toastr.error('error occur');
            }
          },(error:HttpErrorResponse)=>{
            BackendService.debugHttpErrorResponse(error);
          }
        )
      }else{
        this.toastr.info('Please login ');
      }
      this.closeMessageModal();
    }

}
