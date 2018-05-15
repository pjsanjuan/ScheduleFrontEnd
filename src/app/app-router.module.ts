import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UsersComponent} from './users/users.component';
import {SchedulerComponent} from './scheduler/scheduler.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'users', component: UsersComponent},
  {path: 'scheduler', component: SchedulerComponent},
  {path: 'users/:id', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {
}
