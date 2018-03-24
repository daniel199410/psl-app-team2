import { TestBed, inject } from '@angular/core/testing';

import { OrderService } from './order.service';
import { topicArray } from '../models/MockTopics';
import { Topic } from '../models/topic';

describe('OrderService', () => {
  var topics: Topic[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderService]
    });
    topics = JSON.parse(JSON.stringify(topicArray));
  });

  it('should be created', inject([OrderService], (service: OrderService) => {
    expect(service).toBeTruthy();
  }));

  it('should order by topic', inject([OrderService], (service: OrderService) => {
    service.isAscendingTopic = true;
    service.orderByTopic(topics);
    expect(topics).toEqual([
      topicArray[1],
      topicArray[0],
      topicArray[2],
      topicArray[3]
    ]);

    service.orderByTopic(topics);
    expect(topics).toEqual([
      topicArray[3],
      topicArray[2],
      topicArray[0],
      topicArray[1]
    ]);
  }));

  it('should order by teachers', inject([OrderService], (service: OrderService) => {
    service.isAscendingTeacher = true;
    service.orderByTeachers(topics);
    expect(topics).toEqual([
      topicArray[3],
      topicArray[1],
      topicArray[0],
      topicArray[2]
    ]);

    service.orderByTeachers(topics);
    expect(topics).toEqual([
      topicArray[2],
      topicArray[0],
      topicArray[1],
      topicArray[3]
    ]);
  }));

  it('Should order by learning (students)', inject([OrderService], (service: OrderService) => {
    service.isAscendingLearning = true;
    service.orderByLearning(topics);
    expect(topics).toEqual([
      topicArray[3],
      topicArray[1],
      topicArray[0],
      topicArray[2]
    ]);

    service.orderByLearning(topics);
    expect(topics).toEqual([
      topicArray[2],
      topicArray[0],
      topicArray[1],
      topicArray[3]
    ]);
  }));

  it('should order by description', inject([OrderService], (service: OrderService) => {
    service.isAscendingDescription = true;
    service.orderByDescription(topics);
    expect(topics).toEqual([
      topicArray[1],
      topicArray[0],
      topicArray[2],
      topicArray[3]
    ]);

    service.orderByDescription(topics);
    expect(topics).toEqual([
      topicArray[3],
      topicArray[2],
      topicArray[0],
      topicArray[1]
    ]);
  }));

  it('should order by creation date', inject([OrderService], (service: OrderService) => {
    service.isCreationDate = true;
    service.orderByCreationDate(topics);
    expect(topics).toEqual([
      topicArray[1],
      topicArray[2],
      topicArray[0],
      topicArray[3]
    ]);

    service.orderByCreationDate(topics);
    expect(topics).toEqual([
      topicArray[3],
      topicArray[0],
      topicArray[2],
      topicArray[1]
    ]);
  }));

  it('should order by closed date', inject([OrderService], (service: OrderService) => {
    service.isAscendingClosedDate = true;
    service.orderByClosedDate(topics);
    expect(topics).toEqual([
      topicArray[0],
      topicArray[3],
      topicArray[2],
      topicArray[1]
    ]);

    service.orderByClosedDate(topics);
    expect(topics).toEqual([
      topicArray[1],
      topicArray[2],
      topicArray[3],
      topicArray[0]
    ]);
  }));

  it('should order by chat', inject([OrderService], (service: OrderService) => {
    service.isAscendingChat = true;
    service.orderByChat(topics);
    expect(topics).toEqual([
      topicArray[2],
      topicArray[0],
      topicArray[3],
      topicArray[1]
    ]);

    service.orderByChat(topics);
    expect(topics).toEqual([
      topicArray[1],
      topicArray[3],
      topicArray[0],
      topicArray[2]
    ]);
  }));
});
