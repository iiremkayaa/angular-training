import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { PostService } from './post.service';
@Injectable()
export class PostResolver implements Resolve<any>
{
    constructor(private postService: PostService){
    }
    // tslint:disable-next-line:typedef
    resolve(route: ActivatedRouteSnapshot , state: RouterStateSnapshot){
        return this.postService.getPost(+route.params.id);
    }
}
