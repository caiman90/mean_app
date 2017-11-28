/**
 * Created by rejhan on 26.11.2017.
 */
import { Component } from '@angular/core';
import { ApiService } from './api.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'messages',
  template: `
    <mat-card>
    <mat-card-header>
        <mat-card-title><h4>User Posts</h4></mat-card-title>
    </mat-card-header>
    <div *ngFor="let message of apiService.messages">
    <mat-card>{{message.message}}</mat-card>
    </div>
    </mat-card>
  `
})
export class MessagesComponent {
  constructor (private apiService: ApiService,private route: ActivatedRoute){}

  ngOnInit(){
    var userId = this.route.snapshot.params.id
    this.apiService.getMessages(userId);
  }
}
