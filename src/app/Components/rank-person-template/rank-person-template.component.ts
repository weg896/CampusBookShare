import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rank-person-template',
  templateUrl: './rank-person-template.component.html',
  styleUrls: ['./rank-person-template.component.scss']
})
export class RankPersonTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input('tUsername') tUsername:string;
  @Input('tNickname') tNickname:string;
  @Input('tLendCount') tLendCount:Number;
  @Input('tBorrowCount') tBorrowCount:Number;
  @Input('tPostCount') tPostCount:Number;
  @Input('tRequestCount') tRequestCount:Number;
  @Input('tScore') tScore:string;
  @Input('tBadge') tBadge:string;
  @Input('tCampus') tCampus:string;


}

