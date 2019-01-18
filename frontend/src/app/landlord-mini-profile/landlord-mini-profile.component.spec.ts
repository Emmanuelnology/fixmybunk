import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordMiniProfileComponent } from './landlord-mini-profile.component';

describe('LandlordMiniProfileComponent', () => {
  let component: LandlordMiniProfileComponent;
  let fixture: ComponentFixture<LandlordMiniProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlordMiniProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordMiniProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
