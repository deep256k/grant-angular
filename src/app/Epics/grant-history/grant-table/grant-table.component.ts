import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grant-table',
  templateUrl: './grant-table.component.html',
  styleUrls: ['./grant-table.component.scss']
})
export class GrantTableComponent implements OnInit {
  tableHeading = ['Legal Name', 'EIN', 'Address', 'Last Grant', 'Interest Area'];
  @Input() data;
  constructor() {}

  ngOnInit() {

  }
}
