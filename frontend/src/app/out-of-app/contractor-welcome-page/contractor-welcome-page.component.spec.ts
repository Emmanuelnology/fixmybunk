import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorWelcomePageComponent } from './contractor-welcome-page.component';

describe('ContractorWelcomePageComponent', () => {
  let component: ContractorWelcomePageComponent;
  let fixture: ComponentFixture<ContractorWelcomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorWelcomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
