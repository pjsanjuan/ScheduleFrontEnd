import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users.service';
import {User} from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  loading = false;

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.loading = true;
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loading = false;
    });
  }
}
