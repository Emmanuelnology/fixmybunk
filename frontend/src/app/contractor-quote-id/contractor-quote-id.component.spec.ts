import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorQuoteIdComponent } from './contractor-quote-id.component';

describe('ContractorQuoteIdComponent', () => {
  let component: ContractorQuoteIdComponent;
  let fixture: ComponentFixture<ContractorQuoteIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorQuoteIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorQuoteIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
