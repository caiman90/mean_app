/**
 * Created by rejhan on 27.11.2017.
 */
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class AuthService {
  users = [];
   // move this to config file
  path = 'http://localhost:3000/'
  TOKEN_KEY='token'

  constructor( private http: HttpClient) {}

  get token(){
    return localStorage.getItem(this.TOKEN_KEY)
  }
  get isAuthenticated(){
    return !!localStorage.getItem(this.TOKEN_KEY)
  }

  registerUser(registerData){
    this.http.post(this.path + 'register', registerData).subscribe(res => {
    })
  }

  login(loginData){
    this.http.post<any>(this.path + 'login', loginData).subscribe(res => {
      console.log(res)
      localStorage.setItem(this.TOKEN_KEY,res.token)
    })
  }

  getAllUsers(){
    this.http.get(this.path + 'users').subscribe(res => {
      this.users = res;
    })
  }

  getProfile(id){
    return this.http.get(this.path + 'profile/'+id)
  }
}
