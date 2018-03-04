import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveGroupsComponent } from './active-groups.component';

describe('ActiveGroupsComponent', () => {
  let component: ActiveGroupsComponent;
  let fixture: ComponentFixture<ActiveGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
