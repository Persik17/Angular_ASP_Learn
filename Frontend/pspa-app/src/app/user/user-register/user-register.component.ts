import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { User } from 'src/app/model/user.model';

import { UserService } from 'src/app/service/user.service';
import { AlertifyService } from 'src/app/service/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registrationFrom: FormGroup;
  user: User;
  userSubmitted: boolean;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private alertifyService: AlertifyService
  ) {}

  ngOnInit() {
    this.createRegisterationForm();
  }

  createRegisterationForm() {
    this.registrationFrom = this.fb.group(
      {
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, Validators.required],
        mobile: [null, [Validators.required, Validators.maxLength(10)]],
      },
      { validators: this.passwordMatchingValidator }
    );
  }

  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password')?.value == fg.get('confirmPassword')?.value
      ? null
      : { notmatched: true };
  }

  //--------------------------------
  // Getter methods for all controls
  //--------------------------------
  get userName() {
    return this.registrationFrom.get('userName') as FormControl;
  }
  get email() {
    return this.registrationFrom.get('email') as FormControl;
  }
  get password() {
    return this.registrationFrom.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationFrom.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registrationFrom.get('mobile') as FormControl;
  }
  //--------------------------------

  //need remake after adding API
  onSubmit() {
    console.log(this.registrationFrom.value);
    if (this.registrationFrom.valid) {
      this.userSubmitted = true;

      this.userService.addUser(this.userData());
      this.registrationFrom.reset();

      this.userSubmitted = false;
      this.alertifyService.success('Congrats, you are successfully registered');
    } else {
      this.alertifyService.error('Kindly provide the required fields');
    }
  }

  //need remake after adding API
  userData(): User {
    return (this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
      isAdmin: false,
    });
  }
}
