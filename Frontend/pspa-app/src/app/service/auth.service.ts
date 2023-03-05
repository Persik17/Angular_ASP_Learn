import { Injectable } from '@angular/core';

import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  //need remake after adding API
  authUser(user: User) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users'));
    }
    return users.find(
      (x: User) => x.userName === user.userName && x.password === user.password
    );
  }
}
