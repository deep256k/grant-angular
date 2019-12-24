import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-grant-table',
  templateUrl: './grant-table.component.html',
  styleUrls: ['./grant-table.component.scss']
})
export class GrantTableComponent implements OnInit {
  tableHeading = ['Legal Name', 'EIN', 'Address', 'Last Grant', 'Interest Area'];
  @Input() tableData;
  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: StoreService) {
              // console.log('url', this.route.url);
              }

  ngOnInit() {

  }
  navigateToPurpose(i) {
    const selecteddata = {
      name: this.tableData[i].legalName,
      EIN: this.tableData[i].EIN,
      Address: this.tableData[i].Address,
      lastGrant: this.tableData[i].lastGrant,
      interestArea: this.tableData[i].interestArea,
    };
    this.service.selectedInfo(selecteddata);
    this.router.navigate(['step1'], {relativeTo: this.route});
  }
}
