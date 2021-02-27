import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navbar/navbar.component';
import { PostDetailComponent } from './post-detail/detail.component';
import { PostRouteActivator } from './post-detail/post-route-activator.service';
import { PostListComponent } from './post-list/postlist.component';
import { AddPostComponent } from './add-post/add.component';

import { AppComponent } from './app.component';
import { DeletePostComponent } from './delete-post/delete.component';
import { LoginComponent } from './login/login.component';
import { appRoutes } from './routes';
import { CommentService } from './shared/comment.service';
import { PostService } from './shared/post.service';
import {UserService} from './shared/user.service';
import { ProfileComponent } from './user/profile/profile.component';
import { UserRouteActivator } from './user/profile/user-route-activator.service';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { PostListResolver } from './shared/post-list-resolver.service';
import { PostResolver } from './shared/post-resolver.service';
import { CommentListComponent } from './comment-list/commentlist.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import {ShorteningPipe} from './shared/shortening.pipe';
import { JQUERY_TOKEN } from './common/jquery.service';
import { ModalTriggerDirective } from './common/modelTrigger.directive';
import { SimpleModalComponent } from './common/simplemodal.component';
import { AlbumListComponent } from './album/album-list/albumlist.component';
import { AlbumService } from './shared/album.service';
import { PhotoListComponent } from './photo/photo-list/photolist.component';
import { PhotoService } from './shared/photo.service';
import { AlbumListResolver } from './shared/album-list-resolver.service';
import { UserResolver } from './shared/user-resolver.service';
import { AuthService } from './shared/auth.service';
import { RegisterComponent } from './register/register.component';
import { EmailInputDirective } from './common/email.directive';
import { PhoneInputDirective } from './common/phone.directive';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// tslint:disable-next-line:no-string-literal
const jQuery = window['$'];
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
    ProfileComponent,
    UserDetailComponent,
    CommentListComponent,
    AddCommentComponent,
    ShorteningPipe,
    ModalTriggerDirective,
    SimpleModalComponent,
    AlbumListComponent,
    PhotoListComponent,
    RegisterComponent,
    EmailInputDirective,
    PhoneInputDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatProgressSpinnerModule

  ],
  providers: [PostService, UserService, PostRouteActivator, CommentService,
    UserRouteActivator, PostListResolver, AlbumListResolver, PostResolver, UserResolver,
  {provide: JQUERY_TOKEN, useValue : jQuery}, AlbumService, PhotoService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
