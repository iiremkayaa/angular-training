import { Routes } from '@angular/router';
import { PostDetailComponent } from './post-detail/detail.component';
import { PostRouteActivator } from './post-detail/post-route-activator.service';
import { PostListComponent } from './post-list/postlist.component';
import { AddPostComponent } from './add-post/add.component';
import { DeletePostComponent } from './delete-post/delete.component';
import { LoginComponent } from './login/login.component';
import { PostListResolver } from './shared/post-list-resolver.service';
import { PostResolver } from './shared/post-resolver.service';
import { ProfileComponent } from './user/profile/profile.component';
import { UserRouteActivator } from './user/profile/user-route-activator.service';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { AlbumListComponent } from './album/album-list/albumlist.component';
import { AlbumListResolver } from './shared/album-list-resolver.service';
import { UserResolver } from './shared/user-resolver.service';
import { RegisterComponent } from './register/register.component';

export const appRoutes: Routes = [
    {path: 'posts', component: PostListComponent, resolve: {posts: PostListResolver}},
    {path: 'delete', component: DeletePostComponent},
    {path: 'create', component: AddPostComponent},
    {path: '', redirectTo: '/posts', pathMatch: 'full'},
    // { path: 'login', loadChildren: () => import('./login/user.module').then(m => m.UserModule) },
    {path: 'detail/:id', component: PostDetailComponent, canActivate: [PostRouteActivator],
     resolve: { post: PostResolver, user: UserResolver}},
    {path: 'user/:id', component: UserDetailComponent, canActivate: [UserRouteActivator], resolve: { albums: AlbumListResolver}},
    {path: 'profile', component: ProfileComponent, canActivate: [UserRouteActivator]},
    {path: 'albums', component: AlbumListComponent, resolve: {albums: AlbumListResolver}},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
];

