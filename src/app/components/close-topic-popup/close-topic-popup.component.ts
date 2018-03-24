import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { Topic } from '../../models/topic';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-close-topic-popup',
  templateUrl: './close-topic-popup.component.html',
  styleUrls: ['./close-topic-popup.component.css']
})
export class CloseTopicPopupComponent implements OnInit {
  @Output() onAdd = new EventEmitter<Topic>(true);
  constructor(
    public closeDialogRef: MatDialogRef<CloseTopicPopupComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Topic
  ) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.closeDialogRef.close();
  }

  closeTopic(topic: Topic){
    this.onAdd.emit(topic)
  }
}