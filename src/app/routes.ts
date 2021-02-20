import { Routes } from "@angular/router";
import { PostDetailComponent } from "src/post-detail/detail.component";
import { PostListComponent } from "src/post-list/postlist.component";
import { AddPostComponent } from "./add-post/add.component";
import { DeletePostComponent } from "./delete-post/delete.component";
import { LoginComponent } from "./login/login.component";

export const appRoutes: Routes = [
    {path:'posts',component:PostListComponent},
    {path:'posts/:id',component:PostDetailComponent},
    {path:'',redirectTo:'/posts',pathMatch:'full'},
    {path:'delete',component:DeletePostComponent},
    {path:'create',component:AddPostComponent},
    {path:'login',component:LoginComponent}
]