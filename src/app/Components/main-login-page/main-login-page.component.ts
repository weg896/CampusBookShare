import { Component, OnInit } from '@angular/core';
import { CurrentUser } from 'src/app/Models/current-user';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-main-login-page',
  templateUrl: './main-login-page.component.html',
  styleUrls: ['./main-login-page.component.scss']
})
export class MainLoginPageComponent implements OnInit {

  constructor() { 
    this.lendNumber = localStorage.getItem('current.LendCount');
    this.borrowNumber =  localStorage.getItem('current.BorrowCount');
    this.rankingStatus = "You have post " + this.lendNumber +' books, '+ this.borrowNumber + ' of them has borrowed by others, Thank you for your generosity!';
  }

  ngOnInit() {
  }
  borrowNumber:string="";
  lendNumber:string="";
  rankingStatus:string="";

}
