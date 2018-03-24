import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog'
import { MatInputModule } from '@angular/material';

import { Topic } from '../../models/topic';
import { DateService } from '../../services/date.service';
import { GroupsToBeOpenComponent } from '../groups-to-be-open/groups-to-be-open.component';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-description-detail',
  templateUrl: './description-detail.component.html',
  styleUrls: ['./description-detail.component.css']
})
export class DescriptionDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private dateService: DateService,
    private snackBar: SnackbarService,
    public dialogRef: MatDialogRef<DescriptionDetailComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Topic
  ) { }

  @Output() onAdd = new EventEmitter<Topic>(true);

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}

  createTopic(topic: Topic, newChat: string, newDescription: string) {
    if (newDescription.length == 0) {
      this.snackBar.show("Description field must not be empty", "", 2000);
    } else if (newChat.length == 0) {
      this.snackBar.show("Link field must not be empty", "", 2000);
    } else {
      topic.openedAt = this.dateService.getDate();
      topic.description=newDescription;
      topic.chat=newChat;
      this.onAdd.emit(this.data);
    }
  }
}