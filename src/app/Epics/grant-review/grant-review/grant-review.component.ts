import { Component, OnInit, ViewChild, ContentChild, AfterViewChecked } from '@angular/core';
import { GrantTableComponent } from '../../grant-history/grant-table/grant-table.component';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-grant-review',
  templateUrl: './grant-review.component.html',
  styleUrls: ['./grant-review.component.scss']
})
export class GrantReviewComponent implements OnInit , AfterViewChecked {
  headingContent = 'Review Your Grant';
  getCharityinfo: any;
  getAdvosorInfo: any;
  @ViewChild(GrantTableComponent , {static: false}) table: GrantTableComponent;
  constructor( private service: StoreService) { }

  ngOnInit() {
    console.log('service', this.service.formInfo);
    this.getCharityinfo = this.service.storeData;
    this.getAdvosorInfo = this.service.formInfo;
  }
  ngAfterViewChecked() {
  console.log('viewchild' , this.table);
  }
}
