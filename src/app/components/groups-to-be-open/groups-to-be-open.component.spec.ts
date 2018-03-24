import { async, ComponentFixture, TestBed,  } from '@angular/core/testing';
import { TimeAgoPipe } from 'time-ago-pipe';

import { GroupsToBeOpenComponent } from './groups-to-be-open.component';
import { TopicsService } from '../../services/topics.service';
import { OrderService } from '../../services/order.service';
import { DateService } from '../../services/date.service';
import { Topic } from '../../models/topic';
import { Input, Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { topicArray } from '../../models/MockTopics';
import { MatTableDataSource, MatSort, MatDialog, MatSelectModule, MatDialogModule, MatDialogRef, matDialogAnimations } from '@angular/material';
import { DataTableModule } from "angular2-datatable";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarService } from '../../services/snackbar.service';
import { DescriptionDetailComponent } from '../description-detail/description-detail.component';

@Component({selector: 'app-description-detail', templateUrl: '../description-detail/description-detail.component.html'})
class DescriptionDetailStubComponent{
  @Input() topic: Topic;
  @Input() hide: boolean;

  @Output() hidec: EventEmitter<boolean> = new EventEmitter<boolean>();
}

describe('GroupsToBeOpenComponent', () => {
  let component: GroupsToBeOpenComponent;
  let fixture: ComponentFixture<GroupsToBeOpenComponent>;

  let orderServiceSpy: jasmine.SpyObj<OrderService>;
  let topicsServiceSpy: jasmine.SpyObj<TopicsService>;

  beforeEach(async(() => {

    const topicSpy = jasmine.createSpyObj('TopicsService', ['getTopics', 'deleteTopic', 'openTopic']);
    const orderSpy = jasmine.createSpyObj('OrderService', [
      'orderByTopic', 
      'orderByCreationDate', 
      'orderByLearning',
      'orderByTeachers', 
      'orderByDescription', 
      'orderByChat']);
    const dateSpy = jasmine.createSpyObj('DateService', ['getDate']);
    const snackSpy = jasmine.createSpyObj('SnackbarService', ['show']);
    const matSpy = jasmine.createSpyObj('MatDialog', ['open']);
  
    topicSpy.getTopics.and.returnValue(Observable.of(JSON.parse(JSON.stringify(topicArray))));
    topicSpy.deleteTopic.and.returnValue(Observable.of(JSON.parse(JSON.stringify(topicArray[0]))));
    topicSpy.openTopic.and.returnValue(Observable.of(JSON.parse(JSON.stringify(topicArray[0]))));

    TestBed.configureTestingModule({
      declarations: [ GroupsToBeOpenComponent, DescriptionDetailStubComponent, TimeAgoPipe ],
      providers: [
        { provide: TopicsService, useValue: topicSpy },
        { provide: OrderService, useValue: orderSpy },
        { provide: DateService, useValue: dateSpy },
        { provide: MatDialog, useValue: matSpy },
        { provide: SnackbarService, useValue: snackSpy }
      ],
      imports: [
        DataTableModule,
        MatSelectModule,
        NoopAnimationsModule,
        MatDialogModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsToBeOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    orderServiceSpy = TestBed.get(OrderService);
    topicsServiceSpy = TestBed.get(TopicsService);
  });

  it('should open a topic', () => {
    var topic = JSON.parse(JSON.stringify(topicArray[0]));
    component.openTopic(topic);
    fixture.detectChanges();
    expect(topicsServiceSpy.openTopic).toHaveBeenCalled();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete topic', () => {
    var topic = JSON.parse(JSON.stringify(topicArray[0]));
    component.deleteTopic(topic);
    fixture.detectChanges();
    expect(topicsServiceSpy.deleteTopic).toHaveBeenCalled();
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
