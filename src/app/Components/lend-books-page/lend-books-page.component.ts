import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lend-books-page',
  templateUrl: './lend-books-page.component.html',
  styleUrls: ['./lend-books-page.component.scss']
})
export class LendBooksPageComponent implements OnInit {

  constructor() { }

  campusArray: Array<any>;
  ngOnInit() {
    this.campusArray = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
      ];
  }
  model;
}
