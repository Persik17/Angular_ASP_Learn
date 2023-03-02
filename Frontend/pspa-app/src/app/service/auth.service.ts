import { Injectable } from '@angular/core';

import { IUser } from '../model/interface/iuser';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  //need remake after adding API
  authUser(user: IUser) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users'));
    }
    return users.find(
      (x: IUser) => x.userName === user.userName && x.password === user.password
    );
  }
}
