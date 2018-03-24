import { TestBed, inject } from '@angular/core/testing';

import { DateService } from './date.service';

describe('DateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DateService]
    });
  });

  it('should be created', inject([DateService], (service: DateService) => {
    expect(service).toBeTruthy();
  }));

  it('should return the date', inject([DateService], (service: DateService) => {
    var date: string = service.getDate();
    expect(date).toContain(new Date().getDay().toString());
    expect(date).toContain(new Date().getMonth().toString());
    expect(date).toContain(new Date().getFullYear().toString());
  }));

  it('should format the date', inject([DateService], (service: DateService) => {
    expect(service.format("2018-03-14 11:39:00")).toEqual("2018-03-14");
  }));
});
