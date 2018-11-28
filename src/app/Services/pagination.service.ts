import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor() { }
/*
  getPager(totalItems:number, currentPage:number = 1, pageSize:number=10){
    let totalPages = Math.ceil(totalItems/pageSize);
    if(currentPage<1){
      currentPage = 1;
      endPage = totalPages;
    }else{
      if(currentPage <= 6){
        startPage = 1;
        endPage 
      }
    }
  }*/
}
