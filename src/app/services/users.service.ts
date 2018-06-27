import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../common/user';
import {USERS} from '../mocks/users-mock';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  getUser(id: number): Observable<User> {
    return of(USERS.find(user => user.id === id));
  }
  getUserByName(name: string): Observable<User> {
    return of(USERS.find(user => user.name === name));
  }
}
