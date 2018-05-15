import {Component, Input, OnInit} from '@angular/core';
import {User} from '../user';
import {UsersService} from '../users.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {MatDialog} from '@angular/material';
import {EditUserDialogComponent} from '../edit-user-form/edit-user-dialog.component';
import * as _ from 'underscore';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User;
  savingUser = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private location: Location,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.refreshUser();
  }

  refreshUser() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id).subscribe(user => {
      this.user = user;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: {
        user: this.user
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!_.isEqual(this.user, result)) {
        // TODO: send request
      }
    });
  }

  updateUser() {
    // TODO: savingUser = true; For displaying a loading icon
    // TODO: this.userService.updateUser(this.user); Should return a promise/observable
    // TODO: upon receiving a result, savingUser = false.
  }
}
