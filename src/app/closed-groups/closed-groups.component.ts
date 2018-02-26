import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../services/topics.service';

@Component({
  selector: 'app-closed-groups',
  templateUrl: './closed-groups.component.html',
  styleUrls: ['./closed-groups.component.css']
})
export class ClosedGroupsComponent implements OnInit {

  Topics: any[];

  constructor(private topicsService : TopicsService) { }

  ngOnInit() {
    this.getTopics();
  }

   //Bring the topics from the json
   getTopics(){
    this.topicsService.gettopics(3).then(respuesta => {this.Topics = respuesta;});
  }

}
