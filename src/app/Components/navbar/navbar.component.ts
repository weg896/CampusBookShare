import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { CurrentUser } from '../../Models/current-user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  islogin:boolean; 
  
  constructor(
    private loginModalService:LoginService, 
    private router:Router,
    private cookie:CookieService) {
      this.islogin = (0 == this.cookie.get('islogin').localeCompare("true")); //CurrentUser.isLogin;
  }

  ngOnInit() {
    
  }

  showLoginModal(){
    this.loginModalService.showModal();
  }

  public logout(){
    console.debug("login");
    CurrentUser.logout();
    this.router.navigateByUrl('');
  }
}
