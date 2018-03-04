import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Topic } from '../../models/topic';
import { GroupsToBeOpenComponent } from '../groups-to-be-open/groups-to-be-open.component';
import { DateService } from '../../services/date.service';

@Component({
  selector: 'app-description-detail',
  templateUrl: './description-detail.component.html',
  styleUrls: ['./description-detail.component.css']
})
export class DescriptionDetailComponent implements OnInit {

  @Input() topic: Topic;
  @Input() hide: boolean;
  constructor(
    private route: ActivatedRoute, 
    private location: Location ,
    private GroupsToBeOpenComponent: GroupsToBeOpenComponent,
    private dateService:DateService
  ) { }

  @Output() hidec: EventEmitter<boolean> = new EventEmitter<boolean>();

  onClose() {
    this.hidec.emit(true);
  }

  ngOnInit() {
  }

  createTopic(topic: Topic, chat: string, des: string) {
    if (des == "") {
      alert("El campo descipción debe ser digitado.");
    } else if (chat=="") {
      alert("El campo chat debe ser digitado.");
    } else {
      topic.openedAt = this.dateService.getDate();
      topic.description=des;
      topic.chat=chat;
      this.GroupsToBeOpenComponent.openTopic(topic);
      this.hidec.emit(true);
    }
  }
}
