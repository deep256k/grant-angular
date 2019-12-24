import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purpose-details',
  templateUrl: './purpose-details.component.html',
  styleUrls: ['./purpose-details.component.scss']
})
export class PurposeDetailsComponent implements OnInit {
  headingContent = 'Grant Purpose';
  purposeOptions = ['Select a Purpose', 'General Operating Expenses', 'Annual Fund', 'Capital Campaign', 'Capital Expenditure'];
  showComment = false;
  selectedOptions = 'Select a Purpose';
  constructor() { }

  ngOnInit() {
  }
  commentBox() {
    this.showComment = !this.showComment;
  }
}
