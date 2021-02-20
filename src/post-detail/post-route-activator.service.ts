import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { PostService } from "src/app/shared/post.service";
@Injectable()
export class PostRouteActivator implements CanActivate{
    constructor(private postService:PostService,private route:Router){

    }
    canActivate(route:ActivatedRouteSnapshot){
        const postExist=!!this.postService.getPost(+route.params['id']);
        if(!postExist){
            this.route.navigate(['/'])
        }
        return postExist;
    }
}