import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private loginModalService:LoginService) { }

  ngOnInit() {
  }

  showLoginModal(){
    this.loginModalService.showModal();
  }
}
