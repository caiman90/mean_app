/**
 * Created by rejhan on 27.11.2017.
 */
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../environments/environment'
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  users = [];
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
  logout(){
    localStorage.removeItem(this.TOKEN_KEY)
    this.router.navigate(['login'])

  }
  registerUser(registerData){
    this.http.post(this.path + 'register', registerData).subscribe(res => {
      this.saveToken(res)
      this.router.navigate(['home'])
    })
  }

  login(loginData){
    this.http.post<any>(this.path + 'login', loginData).subscribe(res => {
       this.saveToken(res)
       this.router.navigate(['home'])
    })
  }
   getAllUsers(){
    this.http.get<any>(this.path + 'users').subscribe(res => {
      this.users = res
    })
  }

  getProfile(id){
    return this.http.get(this.path + 'profile/'+id)
  }


  saveToken(response){
    localStorage.setItem(this.TOKEN_KEY,response.token)
  }
}
