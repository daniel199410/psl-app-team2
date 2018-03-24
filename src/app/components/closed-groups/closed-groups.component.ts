import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Topic } from '../../models/topic';
import { TopicsService } from '../../services/topics.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-closed-groups',
  templateUrl: './closed-groups.component.html',
  styleUrls: ['./closed-groups.component.css']
})
export class ClosedGroupsComponent implements OnInit {

  private topics: Topic[];
  items = [
    {value: "10", viewValue:"10"},
    {value: "20", viewValue:"20"},
    {value: "30", viewValue:"30"}
  ];
  constructor(private topicsService:TopicsService, private orderService:OrderService) { }

  ngOnInit() {
    this.getTopics();
  }

  getTopics():void{
    this.topicsService.getTopics(2).subscribe(topics => this.topics = topics);
  }

  orderByTopic(){
    this.orderService.orderByTopic(this.topics);
  }

  orderByCreationDate(){
    this.orderService.orderByCreationDate(this.topics);
  }

  orderByClosedDate(){
    this.orderService.orderByClosedDate(this.topics);
  }
}