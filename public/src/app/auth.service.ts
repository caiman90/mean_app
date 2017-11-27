/**
 * Created by rejhan on 27.11.2017.
 */
import { Http } from '@angular/Http'
import { Injectable } from '@angular/core'

@Injectable()
export class AuthService {
  constructor( private http: Http) {}

  registerUser(registerData){
    this.http.post('http://localhost:3000/register',registerData).subscribe(res => {
    })
  }
  login(loginData){
    this.http.post('http://localhost:3000/login',loginData).subscribe(res => {
      console.log(res)
      localStorage.setItem('token',res.json().token)
    })
  }
}