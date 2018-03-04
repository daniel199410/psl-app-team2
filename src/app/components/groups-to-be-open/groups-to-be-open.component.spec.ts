import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsToBeOpenComponent } from './groups-to-be-open.component';

describe('GroupsToBeOpenComponent', () => {
  let component: GroupsToBeOpenComponent;
  let fixture: ComponentFixture<GroupsToBeOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsToBeOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsToBeOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
