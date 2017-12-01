/**
 * Created by rejhan on 27.11.2017.
 */
import { Component } from '@angular/core';
import { AuthService } from './authService/auth.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'profile',
  templateUrl: './authTemplates/profile.component.html'
})
export class ProfileComponent {
  profile
  constructor (private authService: AuthService,private route: ActivatedRoute){}

  ngOnInit(){
    var id = this.route.snapshot.params.id
    this.authService.getProfile(id).subscribe(data => this.profile = data)
  }

}
