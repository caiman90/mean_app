import { Component } from '@angular/core';
import { AuthService } from './auth.service'
@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
        Rejhan Mean Web App
        <span style="flex: 1 1 auto"></span>
        <button mat-button routerLink="/home">Home</button>
        <button *ng-if="!authService.isAuthenticated" mat-button routerLink="/register">Register</button>
        <button *ng-if="!authService.isAuthenticated" mat-button routerLink="/login">Login</button>
        <button mat-button routerLink="/admin">Admin</button>

    </mat-toolbar>     
    <router-outlet></router-outlet>
`
})
export class AppComponent {
  constructor (private authService: AuthService){}

}
