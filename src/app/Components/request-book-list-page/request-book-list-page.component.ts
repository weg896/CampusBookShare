import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { BackendService } from '../../Services/backend.service';
import { BookTransaction } from 'src/app/Models/book-transaction';

@Component({
  selector: 'app-request-book-list-page',
  templateUrl: './request-book-list-page.component.html',
  styleUrls: ['./request-book-list-page.component.scss']
})
export class RequestBookListPageComponent implements OnInit {

  bookTransactionList:BookTransaction[] = new Array<BookTransaction>();

  constructor(private backendInstance:BackendService) { 
    var tempPara:HttpParams = new HttpParams().append('BookStatus','request');
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
            this.bookTransactionList.push(tempBookTransaction);
          });
        }
      },(error:HttpErrorResponse)=>{
        BackendService.debugHttpErrorResponse(error);
      });
  }

  ngOnInit() {

  }
}


