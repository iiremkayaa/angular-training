import { Routes } from "@angular/router";
import { PostDetailComponent } from "src/post-detail/detail.component";
import { PostRouteActivator } from "src/post-detail/post-route-activator.service";
import { PostListComponent } from "src/post-list/postlist.component";
import { AddPostComponent } from "./add-post/add.component";
import { DeletePostComponent } from "./delete-post/delete.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./user/profile/profile.component";
import { UserRouteActivator } from "./user/profile/user-route-activator.service";
import { UserDetailComponent } from "./user/user-detail/user-detail.component";

export const appRoutes: Routes = [
    {path:'posts',component:PostListComponent},
    {path:'',redirectTo:'/posts',pathMatch:'full'},
    {path:'delete',component:DeletePostComponent},
    {path:'create',component:AddPostComponent},
    {path:'login',component:LoginComponent},
    {path:'detail/:id',component:PostDetailComponent,canActivate:[PostRouteActivator]},
    {path:'user/:id',component:UserDetailComponent,canActivate:[UserRouteActivator]},
    {path:'profile',component:ProfileComponent,canActivate:[UserRouteActivator]}
]