import { Component, OnInit } from '@angular/core';
import { Topic } from '../models/topic';
import { TopicsService } from '../services/topics.service';

@Component({
  selector: 'app-active-groups',
  templateUrl: './active-groups.component.html',
  styleUrls: ['./active-groups.component.css']
})
export class ActiveGroupsComponent implements OnInit {

  Topics: any[];

  constructor(private topicsService : TopicsService) { }

  ngOnInit() {
    this.getTopics();
  }

   //Bring the topics from the json
   getTopics(){
    this.topicsService.gettopics(2).then(respuesta => {this.Topics = respuesta;});
  }

   //Update topics when the administrator decides to delete the group
   deleteTopic(topics: any){
    topics.closedAt=new Date().toJSON().slice(0,24);
    topics.status=3;
    this.topicsService.deleteTopic(topics);
  }

}
