import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SnackbarService } from '../../services/snackbar.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { EditionPopupComponent } from './edition-popup.component';
import { ActiveGroupsComponent } from '../active-groups/active-groups.component';
import { MatFormFieldModule, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatInputModule } from '@angular/material';
import { Topic } from '../../models/topic';
import { topicArray } from '../../models/MockTopics';

describe('EditionPopupComponent', () => {
  let component: EditionPopupComponent;
  let fixture: ComponentFixture<EditionPopupComponent>;
  var topic = JSON.parse(JSON.stringify(topicArray[0]));

  beforeEach(async(() => {
    const matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);
    const snackbarSpy = jasmine.createSpyObj('SnackbarService', ['show']);

    TestBed.configureTestingModule({
      declarations: [ EditionPopupComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: "Anything, it's never used" },
        { provide: Location, useValue: "Anything, it's never used" },
        { provide: ActiveGroupsComponent, useValue: {} },
        { provide: MatDialogRef, useValue: matDialogRefSpy },
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
    fixture = TestBed.createComponent(EditionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should close DialogRef on No click', () => {
    component.onNoClick();
    expect(component.dialogRef.close).toHaveBeenCalled();
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
});
