import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-books-page',
  templateUrl: './find-books-page.component.html',
  styleUrls: ['./find-books-page.component.scss']
})
export class FindBooksPageComponent implements OnInit {

  constructor() { }
  campusArray: Array<any>;
  ngOnInit() {
    this.campusArray = [
        { value: '1', label: 'Option 1' },
        { value: '2', label: 'Option 2' },
        { value: '3', label: 'Option 3' },
      ];
  }
}
