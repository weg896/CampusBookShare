import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import { CurrentUser } from '../../Models/current-user';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  islogin:boolean; 
  navigationSubscription;
  avatar:string="../../../assets/default_avatar.jpg"; // default avatar


  constructor(
    private loginModalService:LoginService, 
    private router:Router,
    private cookie:CookieService,
    private aRoute:ActivatedRoute) {
      this.islogin = (0 == this.cookie.get('islogin').localeCompare("true"));
      this.navigationSubscription = this.router.events.subscribe((event:any)=>{
        /*var tempStr:string = localStorage.getItem("currentUserProflieItem");
        var tempObj = JSON.parse(tempStr);

        if(tempObj.Avatar.localeCompare("") === 0){

        }else{
          this.avatar = tempObj.Avatar;
        }*/
        if(event instanceof NavigationEnd){
          this.islogin = (0 == this.cookie.get('islogin').localeCompare("true"));
        }
      });
  }

  ngOnInit() {
    
  }

  ngOnDestroy():void{
    if(this.navigationSubscription){
      this.navigationSubscription.unsubscribe();
    }
  }

  showLoginModal(){
    this.loginModalService.showModal();
  }

  public logout(){
    console.debug("navbar login");
    CurrentUser.logout();
    this.router.navigateByUrl('');
  }

  initLoad(e){
    console.debug("navbar route --- "+e);
  }
}
