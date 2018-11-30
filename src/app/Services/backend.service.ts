import { Injectable } from '@angular/core';
import { BookTransaction, sample } from '../Models/book-transaction';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { restoreView } from '@angular/core/src/render3';
import { Type } from '@angular/compiler';
import { ApplicantList } from '../Models/applicant-list';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private readonly REST_BASIC_URL:string = "http://d4de8068.ngrok.io/v1";
  public static readonly APPLY:string = "/apply/";
  public static readonly BOOK_TRANSACTION:string = "/book_transaction/";
  public static readonly BUG_REPORT:string = "/bug_report/";
  public static readonly CAMPUS:string = "/campus/";
  public static readonly LOGIN:string = "/login/";
  public static readonly MESSAGER:string = "/messager/";
  public static readonly USER_PROFILE:string = "/user_profile/";

   /* mockingBookList:Array<BookTransaction>;

 public getMockingBookList():void{
    this.mockingBookList = new Array<BookTransaction>();

    for( let item in sample.sampleArray){

      var temp:BookTransaction = new BookTransaction();

      var itemObj = JSON.parse(item);
      temp.Id= itemObj.book_id;
      temp.BookName= itemObj.book_name;
      temp.BookAuthor= itemObj.book_author;
      temp.BookDescription= itemObj.book_description;
      temp.BookCover= itemObj.book_cover;
    
      temp.BookOwner= itemObj.book_owner;
      temp.BookBorrower= itemObj.book_borrower;
    
      temp.Campus= itemObj.campus;
    
      temp.PostExpiration= itemObj.post_expiration; //date
      temp.PostExpiration= itemObj.expect_return_time; //date
      temp.ActualReturnTime= itemObj.actual_return_time; //date
    
      temp.PostDate= itemObj.post_date; //date
    
      temp.BookStatus= itemObj.book_status;
      this.mockingBookList.push(temp);
    }
  }*/

  constructor(private http:HttpClient) { }

  public getFunction(actionName:string, playload:HttpParams):Observable<any> {
    return this.http.get(this.REST_BASIC_URL + actionName, {responseType:"json", params:playload, headers:{'Access-Control-Allow-Origin': '*'}});
  }

  public getWithIDFunction(actionName:string, id:number):Observable<any> {
    return this.http.get(this.REST_BASIC_URL + actionName + id, {responseType: 'json', headers:{'Access-Control-Allow-Origin': '*'}});
  }

  public postFunction(actionName:string, playload:HttpParams):Observable<any> {
    return this.http.post(this.REST_BASIC_URL + actionName, playload, { headers: {'Content-Type':'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*'}});
  }

  public putWithIDFunction(actionName:string, id:number, playload:HttpParams):Observable<any> {
    return this.http.put(this.REST_BASIC_URL + actionName + id, playload, {headers:{'Content-Type':'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*'}});
  }

  public deleteWithIDFunction(actionName:string, id:number):Observable<any> {
    return this.http.delete(this.REST_BASIC_URL + actionName + id, {headers:{'Access-Control-Allow-Origin': '*'}});
  }

}

class backendServiceHandler implements HttpHandler{
  handle(req: HttpRequest<any>): Observable<HttpEvent<any>>{
    return new Observable();
  }
}