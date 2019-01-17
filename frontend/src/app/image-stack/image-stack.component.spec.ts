import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageStackComponent } from './image-stack.component';

describe('ImageStackComponent', () => {
  let component: ImageStackComponent;
  let fixture: ComponentFixture<ImageStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
