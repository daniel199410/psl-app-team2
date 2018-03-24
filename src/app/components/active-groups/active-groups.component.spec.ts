import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveGroupsComponent } from './active-groups.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { Component, Input } from '@angular/core';
import { Topic } from '../../models/topic';
import { topicArray } from '../../models/MockTopics';
import { TopicsService } from '../../services/topics.service';
import { OrderService } from '../../services/order.service';
import { DateService } from '../../services/date.service';
import { Observable } from 'rxjs/Rx';
import { MatDialog, MatDialogRef, MatDialogContainer } from '@angular/material/dialog';
import { DataTableModule } from "angular2-datatable";
import { MatSelectModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarService } from '../../services/snackbar.service';
import { CloseTopicPopupComponent } from '../close-topic-popup/close-topic-popup.component';
import { OverlayRef } from '@angular/cdk/overlay';

//Stub EditionPopup
@Component({selector: 'app-edition-popup', template: '../edition-popup/edition-popup.component.html'})
class EditionPopupStubComponent{
  @Input() topic: Topic;
  @Input() isHidden: Boolean;
}

describe('ActiveGroupsComponent', () => {
  let component: ActiveGroupsComponent;
  let fixture: ComponentFixture<ActiveGroupsComponent>;

  //Spy objects of a type of service
  let topicsServiceSpy: jasmine.SpyObj<TopicsService>;
  let orderServiceSpy: jasmine.SpyObj<OrderService>;
  let dateServiceSpy: jasmine.SpyObj<DateService>;
  let matDialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async(() => {

    //Create a new spy object with the needed methods
    const topicSpy = jasmine.createSpyObj('TopicsService', ['getTopics', 'deleteTopic', 'openTopic']);
    const orderSpy = jasmine.createSpyObj('OrderService', [
      'orderByTopic', 
      'orderByCreationDate', 
      'orderByLearning',
      'orderByTeachers', 
      'orderByDescription', 
      'orderByChat']);
    const dateSpy = jasmine.createSpyObj('DateService', ['getDate']);
    const matSpy = jasmine.createSpyObj('MatDialog', ['open', 'close']);
    const snackSpy = jasmine.createSpyObj('SnackbarService', ['show']);

    //Make the mocked services return mock topics
    topicSpy.getTopics.and.returnValue(Observable.of(JSON.parse(JSON.stringify(topicArray))));
    topicSpy.deleteTopic.and.returnValue(Observable.of(JSON.parse(JSON.stringify(topicArray[0]))));
    topicSpy.openTopic.and.returnValue(Observable.of(JSON.parse(JSON.stringify(topicArray[0]))));

    TestBed.configureTestingModule({
      declarations: [
        TimeAgoPipe,
        ActiveGroupsComponent,
        EditionPopupStubComponent,
      ],
      providers: [
        //Provide services using the spies
        {provide: TopicsService, useValue: topicSpy},
        {provide: OrderService, useValue: orderSpy},
        {provide: DateService, useValue: dateSpy},
        {provide: MatDialog, useValue: matSpy},
        {provide: SnackbarService, useValue: snackSpy}
      ],
      imports: [
        DataTableModule,
        MatSelectModule,
        NoopAnimationsModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    //Get the injected spy services to use them later if necessary
    topicsServiceSpy = TestBed.get(TopicsService);
    orderServiceSpy = TestBed.get(OrderService);
    dateServiceSpy = TestBed.get(DateService);
    matDialogSpy = TestBed.get(MatDialog);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should select topics', () => {
    //At start there is not selected topic
    expect(component.selectedTopic).toBeUndefined();
    var mocktopic: Topic = JSON.parse(JSON.stringify(topicArray[0]));

    //Select the mock topic
    component.onSelect(mocktopic);
    fixture.detectChanges();

    //The selected topic must be the mock topic
    expect(component.selectedTopic).toEqual(mocktopic);
  });

  it('should close child', () => {
    component.closeChild(true);
    expect(component).toBeTruthy();
  });

  it('should delete topic', () => {
    var topic = JSON.parse(JSON.stringify(topicArray[0]));
    component.deleteTopic(topic);
    fixture.detectChanges();
    expect(topicsServiceSpy.deleteTopic).toHaveBeenCalled();
  });

  it('should open a topic', () => {
    var topic = JSON.parse(JSON.stringify(topicArray[0]));
    component.openTopic(topic);
    fixture.detectChanges();
    expect(topicsServiceSpy.openTopic).toHaveBeenCalled();
  });

  it('should order by topic', () => {
    component.orderByTopic();
    fixture.detectChanges();
    expect(orderServiceSpy.orderByTopic).toHaveBeenCalled();
  });

  it('should order by creation date', () => {
    component.orderByCreationDate();
    fixture.detectChanges();
    expect(orderServiceSpy.orderByCreationDate).toHaveBeenCalled();
  });
 
  it('should order by description', () => {
    component.orderByDescription();
    fixture.detectChanges();
    expect(orderServiceSpy.orderByDescription).toHaveBeenCalled();
  });
 
  it('should order by number of learning people', () => {
    component.orderByLearning();
    fixture.detectChanges();
    expect(orderServiceSpy.orderByLearning).toHaveBeenCalled();
  });
 
  it('should order by number of teachers', () => {
    component.orderByTeachers();
    fixture.detectChanges();
    expect(orderServiceSpy.orderByTeachers).toHaveBeenCalled();
  });
 
  it('should order by chat', () => {
    component.orderByChat();
    fixture.detectChanges();
    expect(orderServiceSpy.orderByChat).toHaveBeenCalled();
  });

});
