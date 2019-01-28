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


  public loginThirdParty(){
    var tempPara:HttpParams = new HttpParams().append("verify",''+"jerry" + "|"+"jerry");
    this.loginHelper(tempPara);
  }

  private loginHelper(tempPara:HttpParams){
    this.backendInstance.getFunction(BackendService.LOGIN,tempPara).subscribe(

      (res)=>{
        CurrentUser.login();
        CurrentUser.setUsername(this.modalFormLoginUsername.value);
        var tempPara2 = new HttpParams().append("singleuser",this.modalFormLoginUsername.value)
        this.backendInstance.getFunction(BackendService.USER_PROFILE, tempPara2).subscribe(
          (res)=>{
            console.debug("lend count login: "+res.LendCount);
            console.debug("Borrow count login: "+res.BorrowCount);
            if(!res.Id){
              console.debug("no profile found");
            }else{
              localStorage.setItem('current.Id',''+res.Id);
              localStorage.setItem('current.Username',''+res.Username);
              localStorage.setItem('current.Nickname',''+res.Nickname);
              localStorage.setItem('current.Email',''+res.Email);
              localStorage.setItem('current.Campus',''+res.Campus);
              localStorage.setItem('current.StudentId',''+res.StudentId);
              localStorage.setItem('current.Avatar',''+res.Avatar);
              localStorage.setItem('current.LendCount',''+res.LendCount);
              localStorage.setItem('current.BorrowCount',''+res.BorrowCount);
              localStorage.setItem('current.PostCount',''+res.PostCount);
              localStorage.setItem('current.RequestCount',''+res.RequestCount);
              localStorage.setItem('current.Score',''+res.Score);
              localStorage.setItem('current.SignupDate',''+res.SignupDate);
              localStorage.setItem('current.Badge',''+res.Badge);
              localStorage.setItem('current.EmailVerifyed',''+res.EmailVerifyed);
              localStorage.setItem('current.Rank',''+res.Rank);
              localStorage.setItem("jerry","jerry");
            }
          },(error:HttpErrorResponse)=>{
            BackendService.debugHttpErrorResponse(error);
          }
        )

        this.loginModal.hide();
        this.router.navigateByUrl('mainlogin', {skipLocationChange: true}).then(()=>
          this.router.navigate(["mainlogin"]));
        },
      (error:HttpErrorResponse)=>{
        BackendService.debugHttpErrorResponse(error);

        if(error.status == 409){
          this.errorMessage = "Please check your username and password";
        }if(error.status == 200){
            CurrentUser.login();
            CurrentUser.setUsername(this.modalFormLoginUsername.value);
            var tempPara2 = new HttpParams().append("singleuser",this.modalFormLoginUsername.value)
            console.log("*** " +tempPara2);
            this.backendInstance.getFunction(BackendService.USER_PROFILE, tempPara2).subscribe(
              (res)=>{
                console.debug("lend count login: "+res);
                console.debug("Borrow count login: "+res.BorrowCount);
                
                if(!res.Id){
                  console.debug("no profile found");
                }else{
                  localStorage.setItem('current.Id',''+res.Id);
                  localStorage.setItem('current.Username',''+res.Username);
                  localStorage.setItem('current.Nickname',''+res.Nickname);
                  localStorage.setItem('current.Email',''+res.Email);
                  localStorage.setItem('current.Campus',''+res.Campus);
                  localStorage.setItem('current.StudentId',''+res.StudentId);
                  localStorage.setItem('current.Avatar',''+res.Avatar);
                  localStorage.setItem('current.LendCount',''+res.LendCount);
                  localStorage.setItem('current.BorrowCount',''+res.BorrowCount);
                  localStorage.setItem('current.PostCount',''+res.PostCount);
                  localStorage.setItem('current.RequestCount',''+res.RequestCount);
                  localStorage.setItem('current.Score',''+res.Score);
                  localStorage.setItem('current.SignupDate',''+res.SignupDate);
                  localStorage.setItem('current.Badge',''+res.Badge);
                  localStorage.setItem('current.EmailVerifyed',''+res.EmailVerifyed);
                  localStorage.setItem('current.Rank',''+res.Rank);
                  localStorage.setItem("jerry","jerry");
                }
              },(error:HttpErrorResponse)=>{
                BackendService.debugHttpErrorResponse(error);
              }
            )
    
            this.loginModal.hide();
            this.router.navigateByUrl('mainlogin', {skipLocationChange: true}).then(()=>
            this.router.navigate(["mainlogin"]));

        }else{
          this.errorMessage = "Please check your network connection";
        }
        this.alert.nativeElement.classList.add("show");
      }
    )
  }


  public loginToSystem(){
    var tempPara:HttpParams = new HttpParams().append("verify",''+this.modalFormLoginUsername.value + "|"+this.modalFormLoginPassword.value);
    this.loginHelper(tempPara);
  }
}
