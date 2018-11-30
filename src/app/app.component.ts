import { Component, Inject, forwardRef } from '@angular/core';
import { CurrentUser } from './Models/current-user';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CampusBookShare';

  constructor(@Inject(forwardRef(()=>CookieService)) cookie){
    CurrentUser.setCookiesInstance(cookie);
    console.log("app init");
  }
}
