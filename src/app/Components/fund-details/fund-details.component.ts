import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fund-details',
  templateUrl: './fund-details.component.html',
  styleUrls: ['./fund-details.component.scss']
})
export class FundDetailsComponent implements OnInit {
 @Input() fundDetails: object;
  constructor() { }

  ngOnInit() {
  }

}
