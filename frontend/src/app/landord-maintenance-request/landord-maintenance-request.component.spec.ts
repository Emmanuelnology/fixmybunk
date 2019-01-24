import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandordMaintenanceRequestComponent } from './landord-maintenance-request.component';

describe('LandordMaintenanceRequestComponent', () => {
  let component: LandordMaintenanceRequestComponent;
  let fixture: ComponentFixture<LandordMaintenanceRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandordMaintenanceRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandordMaintenanceRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
