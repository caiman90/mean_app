/**
 * Created by rejhan on 27.11.2017.
 */
/**
 * Created by rejhan on 26.11.2017.
 */
import { Component } from '@angular/core';
import { AuthService } from './authService/auth.service'

@Component({
  selector: 'login',
  templateUrl: './authTemplates/login.component.html'
})
export class LoginComponent {
  loginData = { }
  constructor (private authService: AuthService){}

  login(){
    console
    this.authService.login(this.loginData)
  }

}
