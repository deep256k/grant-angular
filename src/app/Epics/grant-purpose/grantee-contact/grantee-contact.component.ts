import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { StoreService } from '../../store.service';

@Component({
  selector: 'app-grantee-contact',
  templateUrl: './grantee-contact.component.html',
  styleUrls: ['./grantee-contact.component.scss']
})
export class GranteeContactComponent implements OnInit {
  headingContent = 'Grantee Organization Contact';
  advisorFirstName: any;
  advisorLastName: any;
  advisorEmail: any;
  constructor(private service: StoreService) {
  }

  ngOnInit() {
  }

  valueChange() {
    const obj = {
      fname: this.advisorFirstName,
      lname: this.advisorLastName,
      email: this.advisorEmail
    };
    if (obj.lname !== '' && obj.fname !== '' && obj.email !== '' ) {
      this.service.formData(obj);
    }
  }
}
