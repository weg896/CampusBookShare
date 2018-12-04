import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BackendService } from 'src/app/Services/backend.service';
import { ToastrService } from 'ngx-toastr';
import { CurrentUser } from "../../Models/current-user";

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss']
})
export class UserProfilePageComponent implements OnInit {

  constructor(
    private backendInstance:BackendService,
    private toastr:ToastrService) {

    localStorage.getItem('current.Id');
    this.username = localStorage.getItem('current.Username');
    this.nicknameInput = new FormControl(localStorage.getItem('current.Nickname'));
    this.emailInput = new FormControl(localStorage.getItem('current.Email'), Validators.required);
    localStorage.getItem('current.Campus');
    this.studentIdInput = new FormControl(localStorage.getItem('current.StudentId'));
    localStorage.getItem('current.Avatar');
    this.lendCount = localStorage.getItem('current.LendCount');
    this.borrowCount = localStorage.getItem('current.BorrowCount');
    this.postCount = localStorage.getItem('current.PostCount');
    this.requestCount = localStorage.getItem('current.RequestCount');
    localStorage.getItem('current.Score');
    this.signupDate = localStorage.getItem('current.SignupDate');
    localStorage.getItem('current.Badge');
    this.isEmailVerify = localStorage.getItem('current.EmailVerifyed') === 'true' ;
    localStorage.getItem('current.Rank');

  }

  ngOnInit() {
    this.getUserProfile();
  }

  username:string;
  nicknameInput:FormControl;
  studentIdInput:FormControl;
  emailInput:FormControl;

  isEmailVerify:boolean;
  lendCount:string;
  borrowCount:string;
  postCount:string;
  requestCount:string;
  signupDate:string;

  sendVerifyEmail(){
    var tempPara2 = new HttpParams().append("verify_email",this.username+"|"+this.emailInput.value)
    this.backendInstance.getFunction(BackendService.USER_PROFILE, tempPara2).subscribe(
      (res)=>{
        this.toastr.info('verify email has been send to '+this.emailInput.value);
      },
      (error:HttpErrorResponse)=>{

      }
    );
  }


  changeProfile(){

  } 

  getUserProfile(){
    console.log("get user profile function");
    var tempusername = CurrentUser.getUsername();
    var tempPara2 = new HttpParams().append("singleuser",tempusername)
    this.backendInstance.getFunction(BackendService.USER_PROFILE, tempPara2).subscribe(
      (res)=>{
        console.debug(res.LendCount);
        
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
  }
}
