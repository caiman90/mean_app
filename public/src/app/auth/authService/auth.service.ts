/**
 * Created by rejhan on 27.11.2017.
 */
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../../environments/environment'
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  users = [];
  username = ''
   // move this to config file
  path = environment.path + environment.auth
  TOKEN_KEY='token'

  constructor( private http: HttpClient,private router:Router) {}


  get token(){
    return localStorage.getItem(this.TOKEN_KEY)
  }
  get isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY)
  }
  getUsername(){
    return this.username
  }
  logout(){
    localStorage.removeItem(this.TOKEN_KEY)
    this.router.navigate(['login'])
    this.username = ''
  }
  registerUser(user){
    this.http.post<any>(this.path + 'register', user).subscribe(res => {
      this.saveToken(res)
      this.username = res.user
      this.router.navigate([''])
    })
  }

  login(user){
    this.http.post<any>(this.path + 'login', user).subscribe(res => {
      this.saveToken(res)
      this.username = res.user
      this.router.navigate([''])
    })
  }
   getAllUsers(){
    this.http.get<any>(this.path + 'users').subscribe(res => {
      this.users = res
    })
  }

  getProfile(){
    return this.http.get<any>(this.path + 'profile/')

  }
  saveToken(response){
    localStorage.setItem(this.TOKEN_KEY,response.token)
  }
}
