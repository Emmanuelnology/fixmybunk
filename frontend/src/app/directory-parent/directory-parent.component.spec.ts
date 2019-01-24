import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryParentComponent } from './directory-parent.component';

describe('DirectoryParentComponent', () => {
  let component: DirectoryParentComponent;
  let fixture: ComponentFixture<DirectoryParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectoryParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
