import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurposeDetailsComponent } from './purpose-details.component';

describe('PurposeDetailsComponent', () => {
  let component: PurposeDetailsComponent;
  let fixture: ComponentFixture<PurposeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurposeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurposeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
