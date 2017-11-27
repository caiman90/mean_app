/**
 * Created by rejhan on 27.11.2017.
 */
import { Component } from '@angular/core';
import { AuthService } from './auth.service'

@Component({
  selector: 'users',
  template: `
   <div *ngFor="let user of authService.users">
    <mat-card [routerLink]="['/profile',user._id]" style="cursor:pointer">{{user.email}}</mat-card>
    </div>
`
})
export class UsersComponent {
  users = { }
  constructor (private authService: AuthService){}

  ngOnInit(){
    this.authService.getAllUsers()
  }

}
