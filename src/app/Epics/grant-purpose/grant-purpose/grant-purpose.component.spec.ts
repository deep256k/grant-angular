import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantPurposeComponent } from './grant-purpose.component';

describe('GrantPurposeComponent', () => {
  let component: GrantPurposeComponent;
  let fixture: ComponentFixture<GrantPurposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantPurposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantPurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
