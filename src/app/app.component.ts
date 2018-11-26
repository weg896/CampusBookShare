import { Component } from '@angular/core';
import { CurrentUser } from './current-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CampusBookShare';

  islogin = CurrentUser.isLogin;
}
