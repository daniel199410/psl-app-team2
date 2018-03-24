import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule, MatSnackBar } from '@angular/material';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Sort } from '@angular/material';

import { Topic } from '../../models/topic';
import { TopicsService } from '../../services/topics.service';
import { OrderService } from '../../services/order.service';
import { DateService } from '../../services/date.service';
import { DescriptionDetailComponent } from '../description-detail/description-detail.component';
import { CloseTopicPopupComponent } from '../close-topic-popup/close-topic-popup.component';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-groups-to-be-open',
  templateUrl: './groups-to-be-open.component.html',
  styleUrls: ['./groups-to-be-open.component.css']
})
export class GroupsToBeOpenComponent implements OnInit {
  private topics: Topic[];
  private COLUMNS_TO_DISPLAY = ["topicName", "topicDescription", "topicStudents", "topicGuiding", "actions"];
  dataSource = new MatTableDataSource(this.topics);
  items = [
    {value: "10", viewValue:"10"},
    {value: "20", viewValue:"20"},
    {value: "30", viewValue:"30"}
  ];
  Orderitems = [
    {value: "Name" },
    {value: "Description"},
    {value: "Open date"},
    {value: "Learning"},
    {value: "Guiding"},
    {value: "Chat"}
  ]
  sortedData;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private topicsService:TopicsService, 
    private orderService:OrderService, 
    private dateService:DateService,
    public dialog: MatDialog,
    public snackBar: SnackbarService
  ) { }

  ngOnInit() {
    this.getTopics();
  }

  ngAfterViewInit() {
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

  checkReady(studentCount:number, teachersCount:number){
    return (studentCount >= 10 && teachersCount >= 1);
  }

  checkReadyToClose(date:string, studentCount:number, teachersCount:number){
    let cdate = new Date(date);
    let adate = new Date(this.dateService.getDate());
    var cd = cdate.getTime(); // millisecods created date
    var ad = adate.getTime(); // millisecond actual date
    var days = ad-cd; //diference in milliseconds
    var days = Math.round(days/(1000 * 60 * 60 * 24)); //transform diference in days

    //console.log(days);

    if(days >= 30 && studentCount <10 && teachersCount == 0 ){
      return true
    }

  }

  openDialog(topic: Topic){
    let dialogRef = this.dialog.open(DescriptionDetailComponent, {
      data: {topic:topic}
    });

    const sub = dialogRef.componentInstance.onAdd.subscribe((data: Topic) => {
      dialogRef.close();
      this.openTopic(topic);
      this.snackBar.show("Topic opened correctly", "", 2000);
    });
  }

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

  openTopic(topic:Topic){
    topic.status=1;
    this.topicsService.openTopic(topic).subscribe();
    this.topics = this.topics.filter(t => t !== topic);
  
  }

  orderByTopic(){
    console.log(this.topics);
    this.orderService.orderByTopic(this.topics);
  }

  orderByLearning(){
    this.orderService.orderByLearning(this.topics);
  }

  orderByTeachers(){
    this.orderService.orderByTeachers(this.topics);
  }

  orderByDescription(){
    this.orderService.orderByDescription(this.topics);
  }

  orderByCreationDate(){
    this.orderService.orderByCreationDate(this.topics)
  }

  orderByChat(){
    this.orderService.orderByChat(this.topics);
  }
}