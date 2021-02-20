import { Component, OnInit } from '@angular/core';
import { PostService } from '../shared/post.service';
import { IUser } from '../user.model';

@Component({
  selector: 'delete-post',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeletePostComponent implements OnInit{
  posts:any[];
  users:any[];
  user:IUser;
  constructor(private postService:PostService){
    postService.getPostsByUserId(1).subscribe(posts=>this.posts=posts);
  }
  ngOnInit(){

  }
  
}
