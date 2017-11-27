/**
 * Created by rejhan on 27.11.2017.
 */
/**
 * Created by rejhan on 26.11.2017.
 */
import { Component } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  selector: 'login',
  template: `
   <mat-card>
    <mat-card-header>
        <mat-card-title><h4>Login</h4></mat-card-title>
    </mat-card-header>
    <mat-card-content>
        <form>
            <mat-form-field>
                <input [(ngModel)]="loginData.email" name="email" matInput placeholder="Email" type="email">
            </mat-form-field>
            <mat-form-field>
                <input [(ngModel)]="loginData.password" name="password" matInput placeholder="Password" type="password">
            </mat-form-field>
            <button (click)="login()" mat-raised-button color="primary">Login</button>
        </form>
    </mat-card-content>
   </mat-card>
`
})
export class LoginComponent {
  loginData = { }
  constructor (private authService: AuthService){}

  login(){
    this.authService.login(this.loginData)
  }

}
