import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from 'src/navbar/navbar.component';
import { PostDetailComponent } from 'src/post-detail/detail.component';
import { PostRouteActivator } from 'src/post-detail/post-route-activator.service';
import { PostListComponent } from 'src/post-list/postlist.component';
import { AddPostComponent } from './add-post/add.component';

import { AppComponent } from './app.component';
import { DeletePostComponent } from './delete-post/delete.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './routes';
import { CommentService } from './shared/comment.service';
import { PostService } from './shared/post.service';
import {UserService} from './shared/user.service';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserRouteActivator } from './user/user-detail/user-route-activator.service';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDetailComponent,
    PostListComponent,
    NavigationComponent,
    AddPostComponent,
    DeletePostComponent,
    LoginComponent,
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService,UserService,PostRouteActivator,CommentService,UserRouteActivator],
  bootstrap: [AppComponent]
})
export class AppModule { }
