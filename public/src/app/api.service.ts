/**
 * Created by rejhan on 25.11.2017.
 */
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../environments/environment'

@Injectable()
export class ApiService {
  messages
  path = environment.path

  constructor( private http: HttpClient) {
    this.messages = []
  }

  getMessages(userId){
    this.http.get<any>(this.path + 'posts/' + userId).subscribe(res => {
      this.messages = res;
    })
  }

  postMessage(message){
    this.http.post(this.path + '/post', message)
  }


}
