import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
        Rejhan Mean Web App
        <span style="flex: 1 1 auto"></span>
        <button mat-button>Home</button>
        <button mat-button routerLink="/register">Register</button>
        <button mat-button>Login</button>
    </mat-toolbar>     
    <router-outlet></router-outlet>

`
})
export class AppComponent {
  title = 'MyApp';


}
