/**
 * Created by rejhan on 25.11.2017.
 */
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable()
export class ApiService {
  messages = [];
  path = 'http://localhost:3000'

  constructor( private http: HttpClient) {}


  getMessages(userId){
    this.http.get<messages>(this.path + '/posts/' + userId).subscribe(res => {
        this.messages = res;
      })
  }

  postMessage(message){
    this.http.post(this.path + '/post', message)
  }
}
