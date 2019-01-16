import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipLevelOptionsComponent } from './membership-level-options.component';

describe('MembershipLevelOptionsComponent', () => {
  let component: MembershipLevelOptionsComponent;
  let fixture: ComponentFixture<MembershipLevelOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembershipLevelOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembershipLevelOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
