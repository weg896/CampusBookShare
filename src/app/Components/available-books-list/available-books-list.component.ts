import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { BackendService } from '../../Services/backend.service';
import { BookTransaction } from 'src/app/Models/book-transaction';
import { CurrentUser } from 'src/app/Models/current-user';


@Component({
  selector: 'app-available-books-list',
  templateUrl: './available-books-list.component.html',
  styleUrls: ['./available-books-list.component.scss']
})
export class AvailableBooksListComponent implements OnInit {
  avaliableBooksList:BookTransaction[] = new Array<BookTransaction>();
  Borrow:string = "Borrow";
  SharedBy:string = "Shared By";
  CssButton:string = "blue";
  CssText:string = "indigo-text";
  IsLogin:boolean = CurrentUser.isLogin();

  constructor(private backendInstance:BackendService){
    var tempPara:HttpParams = new HttpParams().append('query','BookStatus:post');
    this.backendInstance.getFunction(BackendService.BOOK_TRANSACTION,tempPara).subscribe(
      (res)=>{
        console.debug(typeof res);
        //BackendService.debugHttpNormalResponse(res);
        if(typeof res === 'string'  && res.localeCompare("null") === 0 ){
          console.debug("no profile found");
        }else{
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
            this.avaliableBooksList.push(tempBookTransaction);
          });
        }
      },(error:HttpErrorResponse)=>{
        BackendService.debugHttpErrorResponse(error);
      });
  }
  
  ngOnInit() {
  }



}
