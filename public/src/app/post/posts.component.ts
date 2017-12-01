/**
 * Created by rejhan on 26.11.2017.
 */
import { Component } from '@angular/core';
import { PostService } from './post.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'posts',
  template: `
    <mat-card>
    <mat-card-header>
        <mat-card-title><h4>User Posts</h4></mat-card-title>
    </mat-card-header>
    <div *ngFor="let message of postService.messages">
    <mat-card>{{message.message}}</mat-card>
    </div>
    </mat-card>
  `
})
export class PostsComponent {
  constructor (private postService: PostService,private route: ActivatedRoute){}

  ngOnInit(){
    var userId = this.route.snapshot.params.id
    this.postService.getPosts(userId);
  }
}
