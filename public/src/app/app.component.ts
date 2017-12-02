import { Component } from '@angular/core';
import { AuthService } from  './auth/authService/auth.service'

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
        Welcome - {{ authService.getUsername() }} 
        <span style="flex: 1 1 auto"></span>
        <button mat-button routerLink="/">Home</button>
        <button mat-button routerLink="/post" *ngIf="authService.isAuthenticated" >Post</button>
        <button *ngIf="!authService.isAuthenticated" mat-button routerLink="/register">Register</button>
        <button *ngIf="!authService.isAuthenticated" mat-button routerLink="/login">Login</button>
        <button *ngIf="authService.isAuthenticated"  mat-button routerLink="/profile">Profile</button>
        <button *ngIf="authService.isAuthenticated" mat-button (click)="authService.logout()">Logout</button>
    </mat-toolbar>     
    <router-outlet></router-outlet>
`
})
export class AppComponent {
  constructor (private authService: AuthService){}
}
