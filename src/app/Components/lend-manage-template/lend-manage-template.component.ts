import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lend-manage-template',
  templateUrl: './lend-manage-template.component.html',
  styleUrls: ['./lend-manage-template.component.scss']
})
export class LendManageTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('bookName') bookName:string;
  @Input('bookAuthor') bookAuthor:string;
  @Input('postDate') postDate:string;
  @Input('postExpire') postExpire:string;
  @Input('expectReturn') expectReturn:string;
  @Input('bookStatus') bookStatus:string;
  @Input('cssText') cssText:string;

}
