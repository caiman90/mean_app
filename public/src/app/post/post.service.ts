/**
 * Created by rejhan on 25.11.2017.
 */
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'

@Injectable()
export class PostService {
  messages
  path = environment.path

  constructor( private http: HttpClient) {
    this.messages = []
  }

  getPosts(userId){
    this.http.get<any>(this.path + 'posts/' + userId).subscribe(res => {
      this.messages = res;
    })
  }
  postMessage(message){
    this.http.post(this.path + 'post', message).subscribe(res => {

    })
  }
  deletePost(postId){
    return this.http.post(this.path + 'post/delete',{postId: postId})
  }


}
