import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';
import {UsersComponent} from './users/users.component';

import {UsersService} from './users.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ComponentHeaderComponent} from './component-header/component-header.component';
import {AppRouterModule} from './/app-router.module';
import {SchedulerComponent} from './scheduler/scheduler.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {FormsModule} from '@angular/forms';
import {EditUserDialogComponent} from './edit-user-form/edit-user-dialog.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryDataService} from './InMemoryDataService';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ComponentHeaderComponent,
    SchedulerComponent,
    DashboardComponent,
    UserProfileComponent,
    EditUserDialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRouterModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false, delay: 1000})
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
