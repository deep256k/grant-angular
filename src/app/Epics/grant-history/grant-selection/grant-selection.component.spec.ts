import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantSelectionComponent } from './grant-selection.component';

describe('GrantSelectionComponent', () => {
  let component: GrantSelectionComponent;
  let fixture: ComponentFixture<GrantSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
