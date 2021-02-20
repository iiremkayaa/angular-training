import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/post.model';
import { PostService } from 'src/app/shared/post.service';
import { UserService } from 'src/app/shared/user.service';
import { IUser } from 'src/app/user.model';

@Component({
  selector: 'post-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class PostDetailComponent implements OnInit{
  post:IPost;
  user:IUser;
  constructor(private router:Router,private route:ActivatedRoute,private postService:PostService,private userService:UserService){

  }
  ngOnInit(){
    this.postService.getPost(+this.route.snapshot.params['id']).subscribe(post=>this.post=post);
    this.userService.getUser(this.post['userId']).subscribe(user=>this.user=user);
  }

}
