import { Injectable } from '@angular/core';

import { IUser } from '../model/interface/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: IUser;

  constructor() {}

  //need remake after adding API
  addUser(userReg: IUser) {
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
