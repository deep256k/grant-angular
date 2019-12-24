import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantReviewComponent } from './grant-review.component';

describe('GrantReviewComponent', () => {
  let component: GrantReviewComponent;
  let fixture: ComponentFixture<GrantReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
