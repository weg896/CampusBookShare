import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bug-report',
  templateUrl: './bug-report.component.html',
  styleUrls: ['./bug-report.component.scss']
})
export class BugReportComponent implements OnInit {

  constructor(private toastr:ToastrService) { }

  ngOnInit() {
  }

  public bugReport(){
    this.toastr.info('Thank you for your response');
  }
}
