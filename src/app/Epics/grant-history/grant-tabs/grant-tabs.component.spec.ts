import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrantTabsComponent } from './grant-tabs.component';

describe('GrantTabsComponent', () => {
  let component: GrantTabsComponent;
  let fixture: ComponentFixture<GrantTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
