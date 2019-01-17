import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkewImageComponent } from './skew-image.component';

describe('SkewImageComponent', () => {
  let component: SkewImageComponent;
  let fixture: ComponentFixture<SkewImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkewImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkewImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
