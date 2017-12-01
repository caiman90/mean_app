/**
 * Created by rejhan on 30.11.2017.
 */
/**
 * Created by rejhan on 26.11.2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <mat-card>
    <mat-card-header>
        <mat-card-title><h4>Welcome to MEAN web application</h4></mat-card-title>
    </mat-card-header>
    <div>
    <mat-card><h3>Following technologies are beeing used:</h3></mat-card>
    
    <mat-card>Mongo</mat-card>
    <mat-card>Express</mat-card>
    <mat-card>Angular</mat-card>
    <mat-card>Node</mat-card>

    </div>
    </mat-card>
  `
})
export class HomeComponent {


}
