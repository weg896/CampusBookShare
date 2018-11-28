import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import { ModalDirective } from 'angular-bootstrap-md';
import {CurrentUser} from '../../Models/current-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginModal') loginModal:ModalDirective;

  constructor(private loginModalService:LoginService) {
    
  }

  ngOnInit() {
    this.loginModalService.setModal(this.loginModal);
  }


  modalFormLoginEmail = new FormControl('', Validators.email);
  modalFormLoginPassword = new FormControl('', Validators.required);
  
  modalFormRegisterEmail = new FormControl('', Validators.email);
  modalFormRegisterPassword = new FormControl('', Validators.required);
  modalFormRegisterRepeatPassword = new FormControl('', Validators.required);

  public showLogin(){

  }
}
