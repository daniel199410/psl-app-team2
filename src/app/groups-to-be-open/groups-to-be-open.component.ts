import { Component, OnInit } from '@angular/core';
import { Topic } from '../models/topic';
import { TopicsService } from '../services/topics.service';


@Component({
  selector: 'app-groups-to-be-open',
  templateUrl: './groups-to-be-open.component.html',
  styleUrls: ['./groups-to-be-open.component.css']
})
export class GroupsToBeOpenComponent implements OnInit {

  Topics: any[];
  
  constructor(private topicsService : TopicsService) {}

  ngOnInit() {
    this.getTopics();
  }

  //Bring the topics from the json
  getTopics(){
    this.topicsService.gettopics(1).then(respuesta => {this.Topics = respuesta;});
  }

  //Update topics when the administraror decides to create the group
  createTopic(topics: any){
    topics.openedAt=new Date().toJSON().slice(0,24);
    topics.status=2;
    this.topicsService.createTopic(topics);
  }

}
