import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedGroupsComponent } from './closed-groups.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { TopicsService } from '../../services/topics.service';
import { OrderService } from '../../services/order.service';
import { DateService } from '../../services/date.service';
import { Topic } from '../../models/Topic';
import { topicArray } from '../../models/MockTopics';
import { Observable } from 'rxjs/Rx';
import { DataTableModule } from 'angular2-datatable';
import { MatSelectModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ClosedGroupsComponent', () => {
  let component: ClosedGroupsComponent;
  let fixture: ComponentFixture<ClosedGroupsComponent>;

  //Spy objects of a type of service
  let topicsServiceSpy: jasmine.SpyObj<TopicsService>;
  let orderServiceSpy: jasmine.SpyObj<OrderService>;
  let dateServiceSpy: jasmine.SpyObj<DateService>;

  beforeEach(async(() => {

    //Create a new spy object with the needed methods
    const topicSpy = jasmine.createSpyObj('TopicsService', ['getTopics', 'deleteTopic', 'openTopic']);
    const orderSpy = jasmine.createSpyObj('OrderService', ['orderByTopic', 'orderByCreationDate', 'orderByLearning', 'orderByTeachers', 'orderByClosedDate']);
    const dateSpy = jasmine.createSpyObj('DateService', ['getDate']);

    //Make the mocked services return mock topics
    topicSpy.getTopics.and.returnValue(Observable.of(JSON.parse(JSON.stringify(topicArray))));

    TestBed.configureTestingModule({
      declarations: [
        ClosedGroupsComponent,
        TimeAgoPipe
      ],
      providers: [
        {provide: TopicsService, useValue: topicSpy},
        {provide: OrderService, useValue: orderSpy},
        {provide: DateService, useValue: dateSpy}
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
    fixture = TestBed.createComponent(ClosedGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    orderServiceSpy = TestBed.get(OrderService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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

  it('should order by closed date', () => {
    component.orderByClosedDate();
    fixture.detectChanges();
    expect(orderServiceSpy.orderByClosedDate).toHaveBeenCalled();
  });
});
