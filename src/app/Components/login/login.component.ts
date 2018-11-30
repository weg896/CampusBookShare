import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import { ModalDirective } from 'angular-bootstrap-md';
import { CurrentUser } from '../../Models/current-user';
import { BackendService } from '../../Services/backend.service';
import { template } from '@angular/core/src/render3';
import { HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginModal') loginModal:ModalDirective;

  constructor(private loginModalService:LoginService, 
    private backendInstance:BackendService, 
    private router:Router) {
    
  }

  ngOnInit() {
    this.loginModalService.setModal(this.loginModal);
  }


  modalFormLoginUsername= new FormControl('', Validators.required);
  modalFormLoginPassword = new FormControl('', Validators.required);
  
  modalFormRegisterEmail = new FormControl('', Validators.email);
  modalFormRegisterPassword = new FormControl('', Validators.required);
  modalFormRegisterRepeatPassword = new FormControl('', Validators.required);

  public loginToSystem(){
    console.log("login");


    var tempPara:HttpParams = new HttpParams().append("verify",''+this.modalFormLoginUsername + "|"+this.modalFormLoginPassword);
    this.backendInstance.getFunction(BackendService.LOGIN,tempPara).subscribe(
      (res:HttpResponse<any>)=>{
        console.log(res.headers);
        console.log(res.body);
        console.log(res.ok);
        console.log(res.status);
        console.log(res.statusText);
        console.log(res.type);
        console.log(res.url);
/*
        CurrentUser.login();
        this.loginModal.hide();
        this.router.navigateByUrl('mainLogin');*/
      },
      (error:HttpErrorResponse)=>{
        console.log(error.error);
        console.log(error.headers);
        console.log(error.message);
        console.log(error.name);
        console.log(error.ok);
        console.log(error.status);
        console.log(error.statusText);
        console.log(error.type);
        console.log(error.url);
      }
    )
  }
}
