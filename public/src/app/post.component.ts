/**
 * Created by rejhan on 28.11.2017.
 */
import { Component } from '@angular/core';
import { ApiService } from './api.service'

@Component({
  selector: 'posts',
  template: `
     <mat-form-field style="width:100%">
                <textarea [(ngModel)]="postMsg" name="postMsg" matInput placeholder="Post" type="text" ></textarea>
     </mat-form-field>
     <br>
     <button (click)="postFeed()" mat-raised-button color="primary">Post</button>
  `
})
export class PostComponent {
  constructor (private apiService: ApiService){}
  postMsg = ''
  postFeed(){
    this.apiService.postMessage({message: this.postMsg});
  }
}
