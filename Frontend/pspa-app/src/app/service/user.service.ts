import { Injectable } from '@angular/core';

import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User;

  constructor() {}

  //need remake after adding API
  addUser(userReg: User) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users'));
      users = [userReg, ...Object.values(users)];
    } else {
      users = [userReg];
    }

    localStorage.setItem('Users', JSON.stringify(users));
  }
}
