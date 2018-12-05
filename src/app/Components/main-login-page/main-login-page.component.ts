import { Component, OnInit } from '@angular/core';
import { CurrentUser } from 'src/app/Models/current-user';
import { LoginService } from 'src/app/Services/login.service';
import { WindowServiceService } from 'src/app/Services/window-service.service';

@Component({
  selector: 'app-main-login-page',
  templateUrl: './main-login-page.component.html',
  styleUrls: ['./main-login-page.component.scss']
})
export class MainLoginPageComponent implements OnInit {

  constructor(private winRef:WindowServiceService) { 
    this.lendNumber = localStorage.getItem('current.LendCount');
    this.borrowNumber =  localStorage.getItem('current.BorrowCount');
  }

  ngOnInit() {
  }
  borrowNumber:string="";
  lendNumber:string="";
  rankingStatus:string="";

  shareWiheYourFriend(){
    this.winRef.nativeWindow.open('https://www.facebook.com/login/');
  }

}
