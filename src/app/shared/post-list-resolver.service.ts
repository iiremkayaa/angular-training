import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { PostService } from "./post.service";
@Injectable()
export class PostListResolver implements Resolve<any>
{
    constructor(private postService:PostService){

    }
    resolve(){
        return this.postService.getPosts()
    }
}