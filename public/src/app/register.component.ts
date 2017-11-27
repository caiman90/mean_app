/**
 * Created by rejhan on 26.11.2017.
 */
import { Component } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  selector: 'register',
  template: `
   <mat-card>
    <mat-card-header>
        <mat-card-title><h4>Register New User</h4></mat-card-title>
    </mat-card-header>
    <mat-card-content>
        <form>
            <mat-form-field>
                <input [(ngModel)]="registerData.email" name="email" matInput placeholder="Email" type="email">
            </mat-form-field>
            <mat-form-field>
                <input [(ngModel)]="registerData.password" name="password" matInput placeholder="Password" type="password">
            </mat-form-field>
            <br>
            <mat-form-field>
                <input [(ngModel)]="registerData.name" name="name" matInput placeholder="Name" type="text">
            </mat-form-field>
            <br>
            <mat-form-field style="width:100%">
                <textarea [(ngModel)]="registerData.description" name="description" matInput placeholder="Description" type="text" ></textarea>
            </mat-form-field>
            <br>
            <button (click)="post()" mat-raised-button color="primary">Register</button>
        </form>
    </mat-card-content>
   </mat-card>
`
})
export class RegisterComponent {
 registerData = { }
 constructor (private authService: AuthService){}

  post(){
    this.authService.registerUser(this.registerData)
 }

}
