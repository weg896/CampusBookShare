import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BookTransaction } from 'src/app/Models/book-transaction';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BackendService } from 'src/app/Services/backend.service';
import { CurrentUser } from '../../Models/current-user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-find-books-page',
  templateUrl: './find-books-page.component.html',
  styleUrls: ['./find-books-page.component.scss']
})
export class FindBooksPageComponent implements OnInit {

  constructor(private backendInstance:BackendService, private toastr:ToastrService) { }


  ngOnInit() {
    this.campusArray = [
      { value: 'UofS', label: 'U of S' },
      { value: 'gmail', label: 'Gmail' },
    ];
  }

    
  campusArray: Array<any>;
  bookTransactionList:BookTransaction[] = Array<BookTransaction>();
  bookNameInput = new FormControl('', Validators.required);
  bookAuthorInput = new FormControl('');
  campusInput = new FormControl('', Validators.required);

  

  Borrow:string = "Borrow";
  SharedBy:string = "Shared By";
  CssButton:string = "blue";
  CssText:string = "indigo-text";
  IsLogin:boolean = CurrentUser.isLogin();

  searchBooks(){

    if(!this.bookNameInput.value && !this.campusInput.value){
      return;
    }

    var queryString:string= 'BookStatus:post,BookName:'+this.bookNameInput.value+",Campus:"+this.campusInput.value;
    if(this.bookAuthorInput.value){
      queryString += ",BookAuthor:"+this.bookAuthorInput.value;
    }

    var tempPara:HttpParams = new HttpParams().append('query',queryString);
    
    this.backendInstance.getFunction(BackendService.BOOK_TRANSACTION,tempPara).subscribe(
      (res)=>{
        console.debug(res);
        //BackendService.debugHttpNormalResponse(res);
        this.bookTransactionList = new Array<BookTransaction>();
        console.log(this.bookTransactionList.length);
        if(typeof res === 'string'  && res.localeCompare("null") === 0 ){
          console.debug("no profile found");
        }else if(res != null){
          res.forEach((item)=>{
            var tempBookTransaction:BookTransaction = new BookTransaction();
            tempBookTransaction.Id = item.Id;
            tempBookTransaction.BookName = item.BookName;
            tempBookTransaction.BookAuthor = item.BookAuthor;
            tempBookTransaction.BookDescription = item.BookDescription;
            tempBookTransaction.BookCover = item.BookCover;
            tempBookTransaction.BookOwner = item.BookOwner;
            tempBookTransaction.BookBorrower = item.BookBorrower;
            tempBookTransaction.Campus = item.Campus;
            tempBookTransaction.PostExpiration = item.PostExpiration;
            tempBookTransaction.ExpectReturnTime = item.ExpectReturnTime;
            tempBookTransaction.ActualReturnTime = item.ActualReturnTime;
            tempBookTransaction.PostDate = item.PostDate;
            tempBookTransaction.OwnerRating = item.OwnerRating
            tempBookTransaction.BorrowerRating = item.BorrowerRating
            tempBookTransaction.OwnerComment = item.OwnerComment;
            tempBookTransaction.BorrowerComment = item.BorrowerComment;
            tempBookTransaction.BookStatus = item.BookStatus;
            this.bookTransactionList.push(tempBookTransaction);
          });
          
          if(this.bookTransactionList.length == 0 ){
            console.log( this.bookTransactionList.length);
            this.toastr.info('Sorry, no book found ');
          }
        }
      },(error:HttpErrorResponse)=>{
        BackendService.debugHttpErrorResponse(error);
      });
  }

}
