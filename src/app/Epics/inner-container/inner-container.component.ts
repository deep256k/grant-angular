import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-inner-container',
  templateUrl: './inner-container.component.html',
  styleUrls: ['./inner-container.component.scss']
})
export class InnerContainerComponent implements OnInit {
  pageHeading = 'Request a Grant Agreement';
  fundData: object;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://demo2525696.mockable.io/').subscribe(res => {
      this.fundData = res;
    });
  }

}
