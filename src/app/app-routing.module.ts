import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupsToBeOpenComponent } from './groups-to-be-open/groups-to-be-open.component';
import { ActiveGroupsComponent } from './active-groups/active-groups.component';
import { ClosedGroupsComponent } from './closed-groups/closed-groups.component';

const routes: Routes = [
  { path: 'groups_to_be_open', component: GroupsToBeOpenComponent },
  { path: 'active_groups', component: ActiveGroupsComponent },
  { path: 'closed_groups', component: ClosedGroupsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
