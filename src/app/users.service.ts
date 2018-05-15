import {Injectable} from '@angular/core';
import {User} from './user';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersUrl = 'api/users';

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.usersUrl + '/' + id);
  }
}
