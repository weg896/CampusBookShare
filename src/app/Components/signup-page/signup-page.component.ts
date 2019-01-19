import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BackendService } from 'src/app/Services/backend.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {
  modalFormRegisterUsername = new FormControl('', Validators.required);
  modalFormRegisterNickname = new FormControl('', Validators.required);
  modalFormRegisterEmail = new FormControl('', [Validators.email, Validators.required]);
  modalFormRegisterPassword = new FormControl('', Validators.required);
  modalFormRegisterStudentId = new FormControl('', Validators.required);
  modalFormRegisterCampus = new FormControl('', Validators.required);

  errorMessage:string = "";
  campusArray: Array<any>;

  constructor(private backendInstance:BackendService,
    private router:Router,
    private toastr:ToastrService) { }

    ngOnInit() {
      this.campusArray = [
        { value: 'UofS', label: 'U of S' },
        { value: 'gmail', label: 'Gmail' },
      ];
    }
  
    


  public signUpNewuser(){
    var emailObj = this.modalFormRegisterEmail;
    var passwordObj = this.modalFormRegisterPassword;
    var usernameObj = this.modalFormRegisterUsername;
    var nicknameObj = this.modalFormRegisterNickname;
    var studentidObj = this.modalFormRegisterStudentId;
    var campusObj = this.modalFormRegisterCampus;

    if( emailObj == null || !emailObj.valid ||
      passwordObj == null || !passwordObj.valid ||
      usernameObj == null || !usernameObj.valid ||
      nicknameObj == null || !nicknameObj.valid ||
      campusObj == null || !campusObj.valid ||
      studentidObj == null || !studentidObj.valid 
      ){
      this.toastr.error('please correct the form');
      return;
    }

    var tempPara = "{"+
        '"Email":"'+ emailObj.value +'",'+
        '"Password":"'+ passwordObj.value +'",'+
        '"Username":"'+ usernameObj.value +'"}';

    var tempParaProfile = "{"+
      '"Email":"'+ emailObj.value +'",'+
      '"Nickname":"'+ nicknameObj.value +'",'+
      '"Password":"'+ passwordObj.value +'",'+
      '"Username":"'+ usernameObj.value +'",'+
      '"Avatar":"'+'",'+
      '"Badge": "'+'",'+
      '"BorrowCount": 0,'+
      '"Campus":"'+ campusObj.value +'",'+
      '"EmailVerifyed": false,'+
      '"LendCount": 0,'+
      '"PostCount": 0,'+
      '"RequestCount": 0,'+
      '"Score": 0,'+
      '"StudentId":"'+ studentidObj.value +'"}';

    this.backendInstance.postFunction(BackendService.LOGIN, tempPara).subscribe(
      (res)=>{
        console.debug(typeof res);
        console.debug(res);
        if(res){
          this.userprofileReg(tempParaProfile)
        }else{
          this.toastr.error('error occur');
        }
      },
      (error:HttpErrorResponse)=>{
        if(error.status == 409){
          this.toastr.error('user already exist');
        }else if(error.status == 200){
          this.userprofileReg(tempParaProfile)
        }else{
          this.toastr.error('error occur');
        }

        console.debug("status: "+error.status);
        console.debug("headers: "+error.headers);
        console.debug("message: "+error.message);
        console.debug("name: "+error.name);
        console.debug("type: "+error.type);
        console.debug("url: "+error.url);
      }
    );
  }

  private userprofileReg(profile:string){
    this.backendInstance.postFunction(BackendService.USER_PROFILE, profile).subscribe(
      (res)=>{
        console.debug(typeof res);
        console.debug(res);
        if(res){
          this.toastr.success('You can login now');
        }else{
          this.toastr.error('error occur');
        }
      },
      (error:HttpErrorResponse)=>{
        if(error.status == 409){
          this.toastr.error('user already exist');
        }else if(error.status == 200){
          this.toastr.success('You can login now');
        }else{
          this.toastr.error('error occur');
        }

        console.debug("status: "+error.status);
        console.debug("headers: "+error.headers);
        console.debug("message: "+error.message);
        console.debug("name: "+error.name);
        console.debug("type: "+error.type);
        console.debug("url: "+error.url);
      })
    }
}
