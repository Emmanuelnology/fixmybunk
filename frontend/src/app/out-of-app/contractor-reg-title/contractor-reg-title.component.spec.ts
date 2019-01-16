import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorRegTitleComponent } from './contractor-reg-title.component';

describe('ContractorRegTitleComponent', () => {
  let component: ContractorRegTitleComponent;
  let fixture: ComponentFixture<ContractorRegTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorRegTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorRegTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
