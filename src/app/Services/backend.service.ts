import { Injectable } from '@angular/core';
import { BookTransaction, sample } from '../Models/book-transaction';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  mockingBookList:Array<BookTransaction>;
  constructor() { 
    this.mockingBookList = new Array<BookTransaction>();

    for( let item in sample.sampleArray){

      var temp:BookTransaction = new BookTransaction();

      var itemObj = JSON.parse(item);
      temp.book_id= itemObj.book_id;
      temp.book_name= itemObj.book_name;
      temp.book_author= itemObj.book_author;
      temp.book_description= itemObj.book_description;
      temp.book_cover= itemObj.book_cover;
    
      temp.book_owner= itemObj.book_owner;
      temp.book_borrower= itemObj.book_borrower;
    
      temp.campus= itemObj.campus;
    
      temp.post_expiration= itemObj.post_expiration; //date
      temp.expect_return_time= itemObj.expect_return_time; //date
      temp.actual_return_time= itemObj.actual_return_time; //date
    
      temp.post_date= itemObj.post_date; //date
    
      temp.book_status= itemObj.book_status;
      this.mockingBookList.push(temp);

    }



  }




}
