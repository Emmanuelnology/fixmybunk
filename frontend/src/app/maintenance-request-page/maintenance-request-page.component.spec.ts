import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceRequestPageComponent } from './maintenance-request-page.component';

describe('MaintenanceRequestPageComponent', () => {
  let component: MaintenanceRequestPageComponent;
  let fixture: ComponentFixture<MaintenanceRequestPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceRequestPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceRequestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
