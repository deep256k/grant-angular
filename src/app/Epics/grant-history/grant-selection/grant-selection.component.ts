import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grant-selection',
  templateUrl: './grant-selection.component.html',
  styleUrls: ['./grant-selection.component.scss']
})
export class GrantSelectionComponent implements OnInit {
  headingContent = 'Select from Your Charities';
  constructor() { }

  ngOnInit() {
  }

}
