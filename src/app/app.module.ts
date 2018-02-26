import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GroupsToBeOpenComponent } from './groups-to-be-open/groups-to-be-open.component';
import { AppRoutingModule } from './/app-routing.module';

import { HttpModule } from '@angular/http';
import { TopicsService } from './services/topics.service';
import { ActiveGroupsComponent } from './active-groups/active-groups.component';
import { ClosedGroupsComponent } from './closed-groups/closed-groups.component';


@NgModule({
  declarations: [
    AppComponent,
    GroupsToBeOpenComponent,
    ActiveGroupsComponent,
    ClosedGroupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [TopicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
