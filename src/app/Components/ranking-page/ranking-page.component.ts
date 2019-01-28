import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../Services/backend.service';
import { HttpParams, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NormalUserProfile } from 'src/app/Models/normal-user-profile';

@Component({
  selector: 'app-ranking-page',
  templateUrl: './ranking-page.component.html',
  styleUrls: ['./ranking-page.component.scss']
})
export class RankingPageComponent implements OnInit {

  public topUsersArray:NormalUserProfile[] = new Array<NormalUserProfile>();

  constructor(private backendInstance:BackendService) { 
    this.getTopRank();
  }

  ngOnInit() {
  }

  private getTopRank(){
    //var tempPara2 = new HttpParams().append('sortby','score').append('order','desc').append('limit','5');
    var tempPara2 = new HttpParams();
    this.backendInstance.getFunction(BackendService.USER_PROFILE, tempPara2).subscribe(
      (res)=>{
        if(!res){
          console.debug("no profile found");
        }else{
          
          res.forEach((item)=>{
            console.log("score rank:"+item.Score);
            var tempUserProfile:NormalUserProfile = new NormalUserProfile();
            tempUserProfile.Id = item.Id;
            tempUserProfile.Username = item.Username;
            tempUserProfile.Nickname = item.Nickname;
            tempUserProfile.Email = item.Email;
            tempUserProfile.Campus = item.Campus;
            tempUserProfile.StudentId = item.StudentId;
            tempUserProfile.Avatar = item.Avatar;
            tempUserProfile.LendCount = item.LendCount;
            tempUserProfile.BorrowCount = item.BorrowCount;
            tempUserProfile.PostCount = item.PostCount;
            tempUserProfile.RequestCount = item.RequestCount;
            tempUserProfile.Score = item.Score;
            tempUserProfile.SignupDate = item.SignupDate;
            tempUserProfile.Badge = item.Badge;
            tempUserProfile.EmailVerifyed = item.EmailVerifyed;
            this.topUsersArray.push(tempUserProfile);
          });
        }
      },(error:HttpErrorResponse)=>{
        BackendService.debugHttpErrorResponse(error);
      }
    )
  }

}
