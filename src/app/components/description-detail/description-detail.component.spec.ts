import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs/Rx';
import { Inject } from '@angular/core';
import { SnackbarService } from '../../services/snackbar.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DescriptionDetailComponent } from './description-detail.component';
import { GroupsToBeOpenComponent } from '../groups-to-be-open/groups-to-be-open.component';
import { DateService } from '../../services/date.service';
import { MatFormFieldModule, MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, MatInputModule, MatDialog } from '@angular/material';
import { Topic } from '../../models/topic';
import { topicArray } from '../../models/MockTopics';


describe('DescriptionDetailComponent', () => {
  let component: DescriptionDetailComponent;
  let fixture: ComponentFixture<DescriptionDetailComponent>;
  var topic = JSON.parse(JSON.stringify(topicArray[0]));

  beforeEach(async(() => {

    const dateSpy = jasmine.createSpyObj('DateService', ['getDate']);
    const matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);
    const snackbarSpy = jasmine.createSpyObj('SnackbarService', ['show']);

    TestBed.configureTestingModule({
      declarations: [
        DescriptionDetailComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: Observable.of({id: "test"}) },
        { provide: Location, useValue: Observable.of({id: "test"}) },
        { provide: GroupsToBeOpenComponent, useValue: Observable.of({id: "test"}) },
        { provide: DateService, useValue: dateSpy },
        { provide: MatDialogRef, useValue: {close: () => null} },
        { provide: MAT_DIALOG_DATA, useValue: { topic } },
        { provide: SnackbarService, useValue: snackbarSpy }
      ],
      imports: [
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        NoopAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not create a topic with empty chat', () => {
    spyOn(component.onAdd, 'emit');
    component.createTopic(topic,"","description");
    expect(component.onAdd.emit).not.toHaveBeenCalled();
  });

  it('should not create a topic with empty description', () => {
    spyOn(component.onAdd, 'emit');
    component.createTopic(topic,"chat","");
    expect(component.onAdd.emit).not.toHaveBeenCalled();
  });

  it('should create a chat with with a correct chat and description', () => {
    spyOn(component.onAdd, 'emit');
    component.createTopic(topic,"chat","description");
    expect(component.onAdd.emit).toHaveBeenCalled();
  });

  it('should close DialogRef on No click', () => {
    spyOn(component.dialogRef, 'close');
    component.onNoClick();
    expect(component.dialogRef.close).toHaveBeenCalled();
  });
});
