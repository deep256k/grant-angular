import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grant-purpose',
  templateUrl: './grant-purpose.component.html',
  styleUrls: ['./grant-purpose.component.scss']
})
export class GrantPurposeComponent implements OnInit {

  constructor(private router: Router,
              ) { }

  ngOnInit() {
    console.log('current rote is', this.router.url);
  }
  navigatetoBack() {
    this.router.navigate(['grant']);
  }
  navigateToReview() {
    this.router.navigate(['grant/step1/review']);
  }
}
