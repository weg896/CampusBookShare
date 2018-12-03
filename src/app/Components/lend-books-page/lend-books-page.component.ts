import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { HttpParams, HttpErrorResponse } from '@angular/common/http';
import { BackendService } from 'src/app/Services/backend.service';
import { LoginService } from 'src/app/Services/login.service';
import { CurrentUser } from 'src/app/Models/current-user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lend-books-page',
  templateUrl: './lend-books-page.component.html',
  styleUrls: ['./lend-books-page.component.scss']
})
export class LendBooksPageComponent implements OnInit {

  constructor(
    private backendInstance:BackendService, 
    private loginService:LoginService, 
    private toastr:ToastrService) {}


  campusArray: Array<any>;
  ngOnInit() {
    this.campusArray = [
        { value: 'UofS', label: 'U of S' },
        { value: 'gmail', label: 'Gmail' },
      ];
  }

  bookNameInput = new FormControl('', Validators.required);
  bookAuthorInput = new FormControl('');
  expectedReturnDateInput = new FormControl('', Validators.required);
  postExpireDateInput = new FormControl('', Validators.required);
  campusInput = new FormControl('', Validators.required);
  descriptionInput = new FormControl('');
  bookCoverInput = new FormControl('');

  public shareABook(){

    if(CurrentUser.isLogin()){

      if(!this.bookNameInput.value || !this.expectedReturnDateInput.value || !this.postExpireDateInput.value || !this.campusInput.value){
        return;
      }


      var tempDatePostExpire = new Date(""+this.postExpireDateInput.valid);
      var tempDateReturnExpire = new Date(""+this.expectedReturnDateInput.value);

      if(!"Invalid Date".localeCompare(tempDatePostExpire.toString()) || !"Invalid Date".localeCompare(tempDateReturnExpire.toString()) ){
        return;
      }


      if((tempDatePostExpire.getTime() - tempDateReturnExpire.getTime()) >= 0){
        this.toastr.error('post expire date suppose larger than exptect return date');
        return;
      }

      var tempDatePostExpireString = ""+tempDatePostExpire.getFullYear() +"-"+ (tempDatePostExpire.getMonth()+1)+'-'+tempDatePostExpire.getDate();
      var tempDateReturnExpireString = ""+tempDateReturnExpire.getFullYear() +"-"+ (tempDateReturnExpire.getMonth()+1)+'-'+tempDateReturnExpire.getDate();
      var currentUserUsername = localStorage.getItem('currentUser.Username');


      var tempPara2 = new HttpParams()
        .append("BookName",this.bookNameInput.value)
        .append("BookAuthor",this.bookAuthorInput.value)
        .append("ExpectReturnTime",tempDateReturnExpireString)
        .append("PostExpiration",tempDatePostExpireString)
        .append("Campus",this.campusInput.value)
        .append("BookCover",this.bookCoverInput.value)
        .append("BookDescription",this.descriptionInput.value)
        .append("BookBorrower", currentUserUsername)
        .append("BookStatus","post");
      this.backendInstance.postFunction(BackendService.BOOK_TRANSACTION, tempPara2).subscribe(
        (res)=>{
          console.debug(typeof res);
          if(res.Id){
            this.toastr.success('successfully post a book');

          }else{
            this.toastr.error('error on network connection');
          }
        },(error:HttpErrorResponse)=>{
          BackendService.debugHttpErrorResponse(error);
        }
      )
    }else{
      this.toastr.info('Please login ');
    }

    console.log("somthing");
    console.log(this.bookNameInput.value);
    console.log(this.bookAuthorInput.value);
    console.log(this.expectedReturnDateInput.value);
    console.log(this.postExpireDateInput.value);
    console.log(this.campusInput.value);
    console.log(this.descriptionInput.value);
    console.log(this.bookCoverInput.value);
  }
  
}
