import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material';

import { Topic } from '../../models/topic';
import { TopicsService } from '../../services/topics.service';
import { OrderService } from '../../services/order.service';
import { DateService } from '../../services/date.service';
import { EditionPopupComponent } from '../edition-popup/edition-popup.component';
import { CloseTopicPopupComponent } from '../close-topic-popup/close-topic-popup.component';
import { MatSnackBar } from '@angular/material';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-active-groups',
  templateUrl: './active-groups.component.html',
  styleUrls: ['./active-groups.component.css']
})
export class ActiveGroupsComponent implements OnInit {
  private topics: Topic[];
  selectedTopic: Topic;
  private isHidden:boolean = true;
  items = [
    {value: "10", viewValue:"10"},
    {value: "20", viewValue:"20"},
    {value: "30", viewValue:"30"}
  ];

  constructor(
    private topicsService:TopicsService, 
    private orderService:OrderService, 
    private dateService:DateService,
    public dialog: MatDialog,
    public snackBar: SnackbarService
  ) { }

  openCloseDialog(topic:Topic){
  let closeDialogRef = this.dialog.open(CloseTopicPopupComponent, {
    data: {topic:topic}
  });

  const sub = closeDialogRef.componentInstance.onAdd.subscribe((data: Topic) => {
      closeDialogRef.close();
      this.deleteTopic(data);
      this.snackBar.show("Topic closed correctly", "", 2000);
    });
  }

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

  openDialog(topic: Topic){
    let dialogRef = this.dialog.open(EditionPopupComponent, {
      data: {topic:topic}
    });

    const sub = dialogRef.componentInstance.onAdd.subscribe((data: Topic) => {
        dialogRef.close();
        this.openTopic(topic);
        this.snackBar.show("Topic edited correctly", "", 2000);
    });
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

  orderByDescription(){
    this.orderService.orderByDescription(this.topics);
  }

  orderByLearning(){
    this.orderService.orderByLearning(this.topics);
  }

  orderByTeachers(){
    this.orderService.orderByTeachers(this.topics);
  }

  orderByChat(){
    this.orderService.orderByChat(this.topics);
  }
}