import { Component, OnInit } from '@angular/core';

import { Topic } from '../../models/topic';
import { TopicsService } from '../../services/topics.service';
import { OrderService } from '../../services/order.service';
import { DateService } from '../../services/date.service';

@Component({
  selector: 'app-active-groups',
  templateUrl: './active-groups.component.html',
  styleUrls: ['./active-groups.component.css']
})
export class ActiveGroupsComponent implements OnInit {
  private topics: Topic[];
  selectedTopic: Topic;
  private isHidden:boolean = true;
  
  constructor(private topicsService:TopicsService, private orderService:OrderService, private dateService:DateService) { }

  ngOnInit() {
    this.getTopics();
  }

  closeChild(state:boolean){
    this.isHidden = state;
  }

  getTopics():void{
    this.topicsService.getTopics(1).subscribe(topics => this.topics = topics);
  }

  deleteTopic(topic:Topic){
    topic.status=2;
    topic.closedAt = this.dateService.getDate();
    this.topicsService.deleteTopic(topic).subscribe();
    this.topics = this.topics.filter(t => t !== topic);
  }

  onSelect(topic: Topic){
    this.selectedTopic = topic;
    this.isHidden = false;
  }

  openTopic(topic:Topic){
    this.topicsService.openTopic(topic).subscribe();
  }

  orderByTopic(){
    this.orderService.orderByTopic(this.topics);
  }

  orderByCreationDate(){
    this.orderService.orderByCreationDate(this.topics);
  }

  orderByLearning(){
    this.orderService.orderByLearning(this.topics);
  }

  orderByTeachers(){
    this.orderService.orderByTeachers(this.topics);
  }
}