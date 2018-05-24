import {Component, Inject, OnInit} from '@angular/core';
import {User} from '../user';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-edit-user-form',
  templateUrl: './edit-user-dialog.component.html'
})
export class EditUserDialogComponent implements OnInit {

  user: User;

  constructor(
    public dialogRef: MatDialogRef<EditUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit() {
    this.user = this.data;
  }

  onCancel() {
    this.dialogRef.close();
  }

}
