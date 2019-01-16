import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutAppLayoutComponent } from './out-app-layout.component';

describe('OutAppLayoutComponent', () => {
  let component: OutAppLayoutComponent;
  let fixture: ComponentFixture<OutAppLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutAppLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutAppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
