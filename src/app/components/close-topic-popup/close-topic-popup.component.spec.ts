import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material';

import { CloseTopicPopupComponent } from './close-topic-popup.component';
import { Topic } from '../../models/topic';
import { topicArray } from '../../models/MockTopics';

describe('CloseTopicPopupComponent', () => {
  let component: CloseTopicPopupComponent;
  let fixture: ComponentFixture<CloseTopicPopupComponent>;
  var topic = JSON.parse(JSON.stringify(topicArray[0]));

  beforeEach(async(() => {

    let matDialogSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    TestBed.configureTestingModule({
      declarations: [ CloseTopicPopupComponent ],
      providers: [
        {provide: MatDialogRef, useValue: matDialogSpy},
        {provide: MAT_DIALOG_DATA, useValue: { topic }}
      ],
      imports: [
        MatDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseTopicPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should close DialogRef on No click', () => {
    component.onNoClick();
    expect(component.closeDialogRef.close).toHaveBeenCalled();
  });

  it('should close topic', () => {
    spyOn(component.onAdd, 'emit');
    component.closeTopic(topic);
    expect(component.onAdd.emit).toHaveBeenCalled();
  });
});
