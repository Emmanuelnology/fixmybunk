import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobImageComponent } from './job-image.component';

describe('JobImageComponent', () => {
  let component: JobImageComponent;
  let fixture: ComponentFixture<JobImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
