import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSubmittedModalComponent } from './quote-submitted-modal.component';

describe('QuoteSubmittedModalComponent', () => {
  let component: QuoteSubmittedModalComponent;
  let fixture: ComponentFixture<QuoteSubmittedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteSubmittedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteSubmittedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
