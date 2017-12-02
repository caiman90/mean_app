/**
 * Created by rejhan on 27.11.2017.
 */
import { Component } from '@angular/core';
import { AuthService } from '../auth/authService/auth.service'
import { User } from  '../models/user.model'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  profile
  constructor (private authService: AuthService){}
  ngOnInit(){
    this.authService.getProfile().subscribe(data =>{this.profile = data});
  }

}
