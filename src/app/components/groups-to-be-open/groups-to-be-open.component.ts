import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Topic } from '../../models/topic';
import { TopicsService } from '../../services/topics.service';
import { OrderService } from '../../services/order.service';
import { DateService } from '../../services/date.service';
import { DescriptionDetailComponent } from '../description-detail/description-detail.component';

@Component({
  selector: 'app-groups-to-be-open',
  templateUrl: './groups-to-be-open.component.html',
  styleUrls: ['./groups-to-be-open.component.css']
})
export class GroupsToBeOpenComponent implements OnInit {
  private topics: Topic[];
  private today:Date;
  public isAscending: boolean = false;
  selectedTopic: Topic;
  hideChild: boolean = false;
  constructor(private topicsService:TopicsService, private orderService:OrderService, private dateService:DateService) { }

  ngOnInit() {
    this.getTopics();
  }

  getTopics():void{
    this.topicsService.getTopics(0).subscribe(topics => this.topics = topics);
  }

  deleteTopic(topic:Topic){
    topic.status=2;
    topic.closedAt = this.dateService.getDate();
    this.topicsService.deleteTopic(topic).subscribe();
    this.topics = this.topics.filter(t => t !== topic);
  }

  hide(m:boolean):void{
    console.log(this.hideChild);
    this.hideChild = m;
  }

  checkReady(studentCount:number, teachersCount:number){
    return (studentCount >= 10 && teachersCount >= 1);
  }

  onSelect(topic: Topic){
    this.selectedTopic = topic;
    this.hideChild = false;
  }

  openTopic(topic:Topic){
    topic.status=1;
    this.topicsService.openTopic(topic).subscribe();
    this.topics = this.topics.filter(t => t !== topic);
  }

  orderByTopic(){
    this.orderService.orderByTopic(this.topics);
  }

  orderByLearning(){
    this.orderService.orderByLearning(this.topics);
  }

  orderByTeachers(){
    this.orderService.orderByTeachers(this.topics);
  }
}