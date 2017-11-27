/**
 * Created by rejhan on 25.11.2017.
 */
import { Http } from '@angular/Http'
import { Injectable } from '@angular/core'

@Injectable()
export class ApiService {
  messages = [];
  constructor( private http: Http) {}

  getMessages(){
    this.http.get('http://localhost:3000/posts').subscribe(res => {
        this.messages = res.json();
      })
  }
}
