import { Component } from '@angular/core';
import { AuthService } from './auth.service'
@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
        Rejhan Mean Web App
        <span style="flex: 1 1 auto"></span>
        <button mat-button routerLink="/home" *ngIf="authService.isAuthenticated" >Home</button>
        <button *ngIf="!authService.isAuthenticated" mat-button routerLink="/register">Register</button>
        <button *ngIf="!authService.isAuthenticated" mat-button routerLink="/login">Login</button>
        <button  *ngIf="authService.isAuthenticated" mat-button routerLink="/admin">Users</button>
        <button *ngIf="authService.isAuthenticated" mat-button (click)="authService.logout()">Logout</button>
    </mat-toolbar>     
    <router-outlet></router-outlet>
`
})
export class AppComponent {
  constructor (private authService: AuthService){}

}
