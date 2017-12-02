/**
 * Created by rejhan on 26.11.2017.
 */
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from './authService/auth.service'
import { User } from '../models/user.model'
import {errorMessages,regExps} from '../models/validationModule'

@Component({
  selector: 'register',
  templateUrl: './authTemplates/register.component.html'
})
export class RegisterComponent {
  userRegistrationForm: FormGroup;
  errors = errorMessages;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.createForm(new User());
  }

  createForm(user: User) {
    this.userRegistrationForm = this.formBuilder.group({
      name:  [user.name, Validators.compose([Validators.required,
        Validators.minLength(1),  Validators.maxLength(128)])],

      email:[ user.email, Validators.compose([ Validators.required,
        Validators.email])
      ],
      password:[ user.password,Validators.compose([ Validators.required,
        Validators.pattern(regExps.password)])
        ],
      description: [ user.description,[Validators.required,]
      ],
    });
  }
  register(user){
    this.authService.registerUser(user)
 }

}
