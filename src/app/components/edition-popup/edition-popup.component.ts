import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Topic } from '../../models/topic';
import { ActiveGroupsComponent } from '../active-groups/active-groups.component';

@Component({
  selector: 'app-edition-popup',
  templateUrl: './edition-popup.component.html',
  styleUrls: ['./edition-popup.component.css']
})
export class EditionPopupComponent implements OnInit {

  @Input() topic: Topic;
  @Input() isHidden: boolean;
  constructor(private route: ActivatedRoute, private location: Location ,private activeGroupsComponent: ActiveGroupsComponent) { }

  @Output() hideEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  onClose(){
    this.hideEmitter.emit(true);
  }

  ngOnInit() {
  }

  createTopic(topic: Topic, chat: string, des: string) {    console.log(chat);
    if (des == "") {
      alert("El campo descipción debe ser digitado.");
    } else if (chat=="") {
      alert("El campo chat debe ser digitado.");
    } else {
      topic.description=des;
      topic.chat=chat;
      this.activeGroupsComponent.openTopic(topic);
      this.hideEmitter.emit(true);
    }
  }
}
