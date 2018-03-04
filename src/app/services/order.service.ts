import { Injectable } from '@angular/core';
import { Topic } from '../models/topic';

@Injectable()
export class OrderService {
  public isAscendingTopic: boolean = false;
  public isAscendingTeacher: boolean = false;
  public isAscendingLearning: boolean = false;
  public isCreationDate: boolean = false;
  public isAscendingClosedDate: boolean = false;
  constructor() { }

  orderByTopic(topics:Topic[]){
    if(this.isAscendingTopic){
      this.isAscendingTopic = !this.isAscendingTopic;
      topics.sort((a,b) => a.name > b.name ? 1: -1);
    }else{
      this.isAscendingTopic = !this.isAscendingTopic;
      topics.sort(function(a,b){
        return a.name < b.name ? 1: -1;
      });
    }
  }

  orderByTeachers(topics:Topic[]){
    if(this.isAscendingTeacher){
      this.isAscendingTeacher = !this.isAscendingTeacher;
      topics.sort((a,b) => a.teachers > b.teachers ? 1: -1);
    }else{
      this.isAscendingTeacher = !this.isAscendingTeacher;
      topics.sort(function(a,b){
        return a.teachers < b.teachers ? 1: -1;
      });
    }
  }

  orderByLearning(topics:Topic[]){
    if(this.isAscendingLearning){
      this.isAscendingLearning = !this.isAscendingLearning;
      topics.sort((a,b) => a.students > b.students ? 1: -1);
    }else{
      this.isAscendingLearning = !this.isAscendingLearning;
      topics.sort(function(a,b){
        return a.students < b.students ? 1: -1;
      });
    }
  }

  orderByCreationDate(topics:Topic[]){
    if(this.isCreationDate){
      this.isCreationDate = !this.isCreationDate;
      topics.sort((a,b) => a.createdAt > b.createdAt ? 1: -1);
    }else{
      this.isCreationDate = !this.isCreationDate;
      topics.sort((a,b) => a.createdAt < b.createdAt ? 1: -1);
    }
  }

  orderByClosedDate(topics:Topic[]){
    if(this.isAscendingClosedDate){
      this.isAscendingClosedDate = !this.isAscendingClosedDate;
      topics.sort((a,b) => a.closedAt > b.closedAt ? 1: -1);
    }else{
      this.isAscendingClosedDate = !this.isAscendingClosedDate;
      topics.sort((a,b) => a.closedAt < b.closedAt ? 1: -1);
    }
  }
}
