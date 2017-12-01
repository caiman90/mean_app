/**
 * Created by rejhan on 26.11.2017.
 */
import { Component } from '@angular/core';
import { AuthService } from './authService/auth.service'

@Component({
  selector: 'register',
  templateUrl: './authTemplates/register.component.html'
})
export class RegisterComponent {
 registerData = { }
 constructor (private authService: AuthService){}

  post(){
    this.authService.registerUser(this.registerData)
 }

}
