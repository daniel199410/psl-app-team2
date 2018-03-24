import { BrowserModule } from '@angular/platform-browser';
import { DataTableModule } from "angular2-datatable";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TimeAgoPipe } from 'time-ago-pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { 
  MatFormFieldModule, 
  MatInputModule, 
  MatButtonModule,
  MatPaginatorModule,
  MatOptionModule,
  MatSelectModule,
  MatSnackBarModule,
  MatSortModule, 
  MatToolbarModule,
  MatTableModule,
  MatDivider
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopicsService } from './services/topics.service';
import { ActiveGroupsComponent } from './components/active-groups/active-groups.component';
import { AppRoutingModule } from './/app-routing.module';
import { GroupsToBeOpenComponent } from './components/groups-to-be-open/groups-to-be-open.component';
import { ClosedGroupsComponent } from './components/closed-groups/closed-groups.component';
import { DescriptionDetailComponent } from './components/description-detail/description-detail.component';
import { OrderService } from './services/order.service';
import { EditionPopupComponent } from './components/edition-popup/edition-popup.component';
import { DateService } from './services/date.service';
import { CloseTopicPopupComponent } from './components/close-topic-popup/close-topic-popup.component';
import { SnackbarService } from './services/snackbar.service';

@NgModule({
  entryComponents: [
    GroupsToBeOpenComponent, 
    DescriptionDetailComponent,
    ActiveGroupsComponent,
    CloseTopicPopupComponent,
    EditionPopupComponent
  ],
  declarations: [
    AppComponent,
    ActiveGroupsComponent,
    GroupsToBeOpenComponent,
    ClosedGroupsComponent,
    DescriptionDetailComponent,
    EditionPopupComponent,
    TimeAgoPipe,
    CloseTopicPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [TopicsService, OrderService, DateService, SnackbarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
