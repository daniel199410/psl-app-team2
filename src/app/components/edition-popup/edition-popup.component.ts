import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog'

import { Topic } from '../../models/topic';
import { ActiveGroupsComponent } from '../active-groups/active-groups.component';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-edition-popup',
  templateUrl: './edition-popup.component.html',
  styleUrls: ['./edition-popup.component.css']
})
export class EditionPopupComponent implements OnInit {

  @Input() topic: Topic;
  @Input() isHidden: boolean;
  constructor(
    private route: ActivatedRoute, 
    private location: Location ,
    private snackBar: SnackbarService,
    public dialogRef: MatDialogRef<ActiveGroupsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Topic
  ) { }

  @Output() hideEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() onAdd = new EventEmitter<Topic>(true);

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  createTopic(topic: Topic, newChat: string, newDescription: string) {
    if (newDescription.length == 0) {
      this.snackBar.show("Description field must not be empty", "", 2000);
    } else if (newChat.length == 0) {
      this.snackBar.show("Link field must not be empty", "", 2000);
    } else {
      topic.description=newDescription;
      topic.chat=newChat;
      this.onAdd.emit(this.data);
    }
  }
}
