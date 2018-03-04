import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ActiveGroupsComponent } from './components/active-groups/active-groups.component';
import { GroupsToBeOpenComponent } from './components/groups-to-be-open/groups-to-be-open.component';
import { ClosedGroupsComponent } from './components/closed-groups/closed-groups.component';
import { DescriptionDetailComponent } from './components/description-detail/description-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/topicsToBeOpen', pathMatch:'full'},
  { path: 'openTopics', component: ActiveGroupsComponent },
  { path: 'topicsToBeOpen', component: GroupsToBeOpenComponent },
  { path: 'closedGroups', component: ClosedGroupsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
