import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorParentComponent } from './contractor-parent.component';

describe('ContractorParentComponent', () => {
  let component: ContractorParentComponent;
  let fixture: ComponentFixture<ContractorParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
