import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GranteeContactComponent } from './grantee-contact.component';

describe('GranteeContactComponent', () => {
  let component: GranteeContactComponent;
  let fixture: ComponentFixture<GranteeContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GranteeContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GranteeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
