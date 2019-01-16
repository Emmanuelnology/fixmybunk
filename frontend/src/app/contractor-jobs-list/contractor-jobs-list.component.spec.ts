import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorJobsListComponent } from './contractor-jobs-list.component';

describe('ContractorJobsListComponent', () => {
  let component: ContractorJobsListComponent;
  let fixture: ComponentFixture<ContractorJobsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorJobsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorJobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
