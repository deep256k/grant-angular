import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-grant-tabs',
  templateUrl: './grant-tabs.component.html',
  styleUrls: ['./grant-tabs.component.scss']
})
export class GrantTabsComponent implements OnInit {
  CharityTable;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://demo7246422.mockable.io/').subscribe(response => {
      console.log('responsse is ', response);
      this.CharityTable = response;
    });
  }
}
