import { Injectable } from '@angular/core';
import { BookTransaction, sample } from '../Models/book-transaction';
import { HttpClient, HttpErrorResponse, HttpParams,HttpResponse, HttpHandler, HttpRequest, HttpEvent } from "@angular/common/http";
import { restoreView } from '@angular/core/src/render3';
import { Type } from '@angular/compiler';
import { ApplicantList } from '../Models/applicant-list';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private readonly REST_BASIC_URL:string = "http://fc31a675.ngrok.io/v1";
  public static readonly APPLY:string = "/apply/";
  public static readonly BOOK_TRANSACTION:string = "/book_transaction/";
  public static readonly BUG_REPORT:string = "/bug_report/";
  public static readonly CAMPUS:string = "/campus/";
  public static readonly LOGIN:string = "/login/";
  public static readonly MESSAGER:string = "/messager/";
  public static readonly USER_PROFILE:string = "/user_profile/";

  constructor(private http:HttpClient) { }

  public getFunction(actionName:string, playload:HttpParams):Observable<any> {
    return this.http.get(this.REST_BASIC_URL + actionName, {responseType:"json", params:playload, headers:{'Access-Control-Allow-Origin': '*'}});
  }

  public getWithIDFunction(actionName:string, id:number):Observable<any> {
    return this.http.get(this.REST_BASIC_URL + actionName + id, {responseType: 'json', headers:{'Access-Control-Allow-Origin': '*'}});
  }


  public postFunction(actionName:string, playload:string):Observable<any> {
    return this.http.post(this.REST_BASIC_URL + actionName, playload, { headers: {'Content-Type':'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*'}});
  }

  public putWithIDFunction(actionName:string, id:number, playload:HttpParams):Observable<any> {
    return this.http.put(this.REST_BASIC_URL + actionName + id, playload, {headers:{'Content-Type':'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin': '*'}});
  }

  public deleteWithIDFunction(actionName:string, id:number):Observable<any> {
    return this.http.delete(this.REST_BASIC_URL + actionName + id, {headers:{'Access-Control-Allow-Origin': '*'}});
  }

  public static debugHttpNormalResponse(res:HttpResponse<any>){
    console.debug('headers ---- '+res.headers);
    console.debug('body ------- '+res.body);
    console.debug('ok --------- '+res.ok);
    console.debug('status ----- '+res.status);
    console.debug('statusText - '+res.statusText);
    console.debug('type ------- '+res.type);
    console.debug('url -------- '+res.url);
  }

  public static debugHttpErrorResponse(error:HttpErrorResponse){
    console.debug('error ------ '+error.error);
    console.debug('headers ---- '+error.headers);
    console.debug('message ---- '+error.message);
    console.debug('name ------- '+error.name);
    console.debug('ok --------- '+error.ok);
    console.debug('status ----- '+error.status);
    console.debug('statusText - '+error.statusText);
    console.debug('type ------- '+error.type);
    console.debug('url -------- '+error.url);
  }

}

