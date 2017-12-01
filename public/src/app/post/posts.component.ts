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
    <mat-card>{{message.message}}
          <button (click)="deletePost(message._id)" mat-raised-button color="primary">Delete Post</button>
    </mat-card>
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
  deletePost(postId){
    this.postService.deletePost(postId).subscribe(res =>{
      this.postService.messages = this.postService.messages.filter(post => post._id !== postId);
    })
  }
}
