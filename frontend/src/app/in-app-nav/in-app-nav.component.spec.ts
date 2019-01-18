import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InAppNavComponent } from './in-app-nav.component';

describe('InAppNavComponent', () => {
  let component: InAppNavComponent;
  let fixture: ComponentFixture<InAppNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InAppNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InAppNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
