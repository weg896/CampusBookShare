import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { HttpParams, HttpErrorResponse } from '@angular/common/http';
import { BackendService } from 'src/app/Services/backend.service';
import { LoginService } from 'src/app/Services/login.service';
import { CurrentUser } from 'src/app/Models/current-user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-request-book-page',
  templateUrl: './request-book-page.component.html',
  styleUrls: ['./request-book-page.component.scss']
})
export class RequestBookPageComponent implements OnInit {

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

  today = new Date();
  bookNameInput = new FormControl('', Validators.required);
  bookAuthorInput = new FormControl('');
  expectedReturnDateInput = new FormControl('', Validators.required);
  postExpireDateInput = new FormControl('', Validators.required);
  campusInput = new FormControl('', Validators.required);
  descriptionInput = new FormControl('');
  bookCoverInput = new FormControl('');

  public requestABook(){

    if(CurrentUser.isLogin()){

      if(!this.bookNameInput.value || !this.expectedReturnDateInput.value || !this.postExpireDateInput.value || !this.campusInput.value){
        console.log("empty input box value");
        return;
      }


      var tempDatePostExpire = new Date(""+this.postExpireDateInput.value);
      var tempDateReturnExpire = new Date(""+this.expectedReturnDateInput.value);
      console.log(""+this.postExpireDateInput.value);

      if(!"Invalid Date".localeCompare(tempDatePostExpire.toString()) || !"Invalid Date".localeCompare(tempDateReturnExpire.toString()) ){
        console.log("invalid date");
        return;
      }

      var tempToday = new Date();

      if(tempDatePostExpire.getTime() - tempToday.getTime() < 0){
        this.toastr.error('post expire date suppose later than today');
        return;
      }

      if(tempDateReturnExpire.getTime() - tempToday.getTime() < 0){
        this.toastr.error('exptect return date suppose later than today');
        return;
      }

      if((tempDatePostExpire.getTime() - tempDateReturnExpire.getTime()) < 0){
        this.toastr.error('post expire date suppose larger than exptect return date');
        return;
      }


      var tempDatePostExpireString = ""+tempDatePostExpire.getFullYear() +"-"+ (tempDatePostExpire.getMonth()+1)+'-'+tempDatePostExpire.getDate();
      var tempDateReturnExpireString = ""+tempDateReturnExpire.getFullYear() +"-"+ (tempDateReturnExpire.getMonth()+1)+'-'+tempDateReturnExpire.getDate();
      var currentUserUsername = CurrentUser.getUsername();

      var tempPara2 = "{"+
        '"BookName":"' + this.bookNameInput.value + '",' +
        '"BookAuthor":"'+this.bookAuthorInput.value + '",' +
        '"ExpectReturnTime":"' + tempDateReturnExpireString + '",' +
        '"PostExpiration":"'+tempDatePostExpireString + '",' +
        '"Campus":"'+this.campusInput.value + '",' +
        '"BookCover":"'+this.bookCoverInput.value + '",' +
        '"BookDescription":"'+this.descriptionInput.value + '",' +
        '"BookBorrower":"'+ currentUserUsername + '",' +
        '"BookStatus":"'+"request" + '"}';

      console.debug(tempPara2.toString());
      this.backendInstance.postFunction(BackendService.BOOK_TRANSACTION, tempPara2).subscribe(
        (res)=>{
          console.debug(typeof res);
          console.debug(res);
          if(res.Id){
            this.toastr.success('successfully post a book');
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
