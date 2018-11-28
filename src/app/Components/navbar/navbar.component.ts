import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { CurrentUser } from '../../Models/current-user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  islogin:boolean = CurrentUser.isLogin;
  
  constructor(private loginModalService:LoginService) {

   }

  ngOnInit() {
    
  }

  showLoginModal(){
    this.loginModalService.showModal();
  }
}
