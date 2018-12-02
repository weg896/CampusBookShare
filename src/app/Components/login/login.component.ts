import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('alert') alert:ElementRef;

  constructor(private loginModalService:LoginService, 
    private backendInstance:BackendService, 
    private router:Router) {
  }

  ngOnInit() {
    this.loginModalService.setModal(this.loginModal);
  }

  closeAlert(){
    this.alert.nativeElement.classList.remove('show');
  }
  modalFormLoginUsername= new FormControl('', Validators.required);
  modalFormLoginPassword = new FormControl('', Validators.required);
  
  modalFormRegisterEmail = new FormControl('', Validators.email);
  modalFormRegisterPassword = new FormControl('', Validators.required);
  modalFormRegisterRepeatPassword = new FormControl('', Validators.required);
  errorMessage:string = "";


  public loginToSystem(){
    var tempPara:HttpParams = new HttpParams().append("verify",''+this.modalFormLoginUsername.value + "|"+this.modalFormLoginPassword.value);
    this.backendInstance.getFunction(BackendService.LOGIN,tempPara).subscribe(

      (res)=>{
        CurrentUser.login();
        var tempPara2 = new HttpParams().append("singleuser",this.modalFormLoginUsername.value)
        this.backendInstance.getFunction(BackendService.USER_PROFILE, tempPara2).subscribe(
          (res)=>{
            console.debug(typeof res);
            //BackendService.debugHttpNormalResponse(res);
            if(typeof res === 'string'  && res.localeCompare("<QuerySeter> no row found") === 0 ){
              console.debug("no profile found");
            }else{
              this.loginModalService.currentUser.Avatar = res.Avatar;
            }
          },(error:HttpErrorResponse)=>{
            BackendService.debugHttpErrorResponse(error);
          }
        )

        this.loginModal.hide();
        this.router.navigateByUrl('mainlogin');
        /*this.router.navigateByUrl('mainlogin', {skipLocationChange: true}).then(()=>
          this.router.navigate(["mainlogin"])); */
        },
      (error:HttpErrorResponse)=>{
        BackendService.debugHttpErrorResponse(error);

        if(error.status == 409){
          this.errorMessage = "Please check your username and password";
        }else{
          this.errorMessage = "Please check your network connection";
        }
        this.alert.nativeElement.classList.add("show");
      }
    )
  }
}
