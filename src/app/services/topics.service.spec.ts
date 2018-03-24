import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { TopicsService } from './topics.service';
import { Observable } from 'rxjs/Rx';
import { topicArray } from '../models/MockTopics';
import { Topic } from '../models/topic';

describe('TopicsService', () => {
  
  beforeEach(() => {

    const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'patch']);

    httpClientSpy.patch.and.returnValue(Observable.of(JSON.parse(JSON.stringify(topicArray))));
    httpClientSpy.get.and.returnValue(Observable.of(JSON.parse(JSON.stringify(topicArray[0]))));

    TestBed.configureTestingModule({
      providers: [
        TopicsService,
        { provide: HttpClient, useValue: httpClientSpy }
      ]
    });
  });

  it('should be created', inject([TopicsService], (service: TopicsService) => {
    expect(service).toBeTruthy();
  }));

  it('should get and return topics', inject([TopicsService], (service: TopicsService) => {
    service.getTopics(1).subscribe((topics: Topic[]) => {
      expect(topics).toBeDefined();
    });
  }));

  it('should delete a topic', inject([TopicsService], (service: TopicsService) => {
    service.deleteTopic(JSON.parse(JSON.stringify(topicArray[0]))).subscribe((topic: Topic) => {
      expect(topic).toBeDefined();
    });
  }));

  it('should open a topic', inject([TopicsService], (service: TopicsService) => {
    service.openTopic(JSON.parse(JSON.stringify(topicArray[0]))).subscribe((topic: Topic) => {
      expect(topic).toBeDefined();
    });
  }));
});
