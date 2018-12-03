import { Component, OnInit } from '@angular/core';
import { BookTransaction } from 'src/app/Models/book-transaction';
import { BackendService } from 'src/app/Services/backend.service';
import { HttpParams, HttpErrorResponse } from '@angular/common/http';
import { CurrentUser } from 'src/app/Models/current-user';

@Component({
  selector: 'app-books-manage-page',
  templateUrl: './books-manage-page.component.html',
  styleUrls: ['./books-manage-page.component.scss']
})
export class BooksManagePageComponent implements OnInit {

  constructor(private backendInstance:BackendService) { 
    this.getAllMyBooksList();
    
  }

  ngOnInit() {
  }

  postBooksList:BookTransaction[];
  lendBooksList:BookTransaction[];
  requestBooksList:BookTransaction[];
  borrowedBooksList:BookTransaction[];

  CssTextShare:string;
  CssTextLend:string;
  CssTextRequest:string;
  CssTextBorrowed:string;


  getAllMyBooksList(){
    this.postBooksList = this.getBooksListWrapper('post', ",BookOwner:"+CurrentUser.getUsername());
    this.lendBooksList = this.getBooksListWrapper('borrowed', ",BookOwner:"+CurrentUser.getUsername());
    this.requestBooksList = this.getBooksListWrapper('request', ",BookBorrower:"+CurrentUser.getUsername());
    this.borrowedBooksList = this.getBooksListWrapper('borrowed',",BookBorrower:"+CurrentUser.getUsername());

  }


  private getBooksListWrapper(bookstatus:string, rest:string):BookTransaction[]{
    var list:BookTransaction[] = new Array<BookTransaction>()
    var tempPara:HttpParams = new HttpParams().append('query','BookStatus:'+bookstatus + rest);
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
            list.push(tempBookTransaction);
          });
        }
      },(error:HttpErrorResponse)=>{
        BackendService.debugHttpErrorResponse(error);
      });
      return list;
  }

}
