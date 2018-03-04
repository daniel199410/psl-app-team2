import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedGroupsComponent } from './closed-groups.component';

describe('ClosedGroupsComponent', () => {
  let component: ClosedGroupsComponent;
  let fixture: ComponentFixture<ClosedGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
