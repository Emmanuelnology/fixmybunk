import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionDemoComponent } from './function-demo.component';

describe('FunctionDemoComponent', () => {
  let component: FunctionDemoComponent;
  let fixture: ComponentFixture<FunctionDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
