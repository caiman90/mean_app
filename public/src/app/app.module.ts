import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatButtonModule,MatCardModule,MatToolbarModule,MatInputModule,MatListModule} from '@angular/material'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatTabsModule } from '@angular/material/tabs';

import { AppComponent } from './app.component'
import { PostService } from './post/post.service'
import { AuthService } from './auth/authService/auth.service'

import { PostsComponent } from './post/posts.component'
import { RegisterComponent } from './auth/register.component'
import { LoginComponent } from './auth/login.component'
import { UsersComponent } from './auth/users.component'
import { ProfileComponent } from './profile/profile.component'
import { PostComponent } from './post/post.component'
import { HomeComponent } from  './home/home.component'
import { AuthInterceptorService } from './auth/authService/authInterceptor.service'

const routes = [
  {path:'',component: HomeComponent},
  {path:'post',component: PostComponent},
  {path:'register',component: RegisterComponent},
  {path:'login',component: LoginComponent},
  {path:'admin',component: UsersComponent},
  {path:'profile',component: ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,PostsComponent,RegisterComponent,LoginComponent,UsersComponent,ProfileComponent,PostComponent,HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    MatButtonModule,MatCardModule,MatToolbarModule,MatInputModule,MatListModule,MatTabsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,

  ],
  providers: [PostService,AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
