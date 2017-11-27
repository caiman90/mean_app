/**
 * Created by rejhan on 26.11.2017.
 */
import { Component } from '@angular/core';
import { ApiService } from './api.service'

@Component({
  selector: 'register',
  template: `
   <mat-card>
    <mat-card-header>
        <mat-card-title>Register New User</mat-card-title>
    </mat-card-header>
    <mat-card-content>
        <form>
            <mat-form-field>
                <input [(ngModel)]="registerData.email" name="email" matInput placeholder="Email" type="email">
            </mat-form-field>
            <mat-form-field>
                <input [(ngModel)]="registerData.password" name="password" matInput placeholder="Password" type="password">
            </mat-form-field>
            <button (click)="post()" mat-raised-button color="primary">Register</button>
        </form>
    </mat-card-content>
   </mat-card>
`
})
export class RegisterComponent {
 registerData = { }
 constructor (private apiService: ApiService){}

  post(){
    console.log(this.registerData)
    this.apiService.registerUser(this.registerData)
 }

}
