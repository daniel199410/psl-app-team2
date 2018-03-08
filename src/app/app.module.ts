import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterializeModule } from 'angular2-materialize';
import {TimeAgoPipe} from 'time-ago-pipe';

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

@NgModule({
  declarations: [
    AppComponent,
    ActiveGroupsComponent,
    GroupsToBeOpenComponent,
    ClosedGroupsComponent,
    DescriptionDetailComponent,
    EditionPopupComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TopicsService, OrderService, DateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
