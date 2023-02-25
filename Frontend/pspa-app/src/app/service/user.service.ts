import { Injectable } from '@angular/core';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User;

  constructor() {}

  addUser(userReg: User) {
    /* this.user = {
      userName: userReg.userName,
      email: userReg.email,
      password: userReg.password,
      mobile: userReg.mobile,
    };

    console.log(this.user); */
  }
}
