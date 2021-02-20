import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/post.model';
import { PostService } from 'src/app/shared/post.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'post-list',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostListComponent implements OnInit {
  posts:any[];
  users:any[];
  constructor(private postService:PostService,private userService:UserService){
    postService.getPosts().subscribe(posts=>this.posts=posts);
    userService.getUsers().subscribe(users=>this.users=users);
  }
  getUserName(id){
    console.log(id);
    var filteredUser = this.users.filter(
      user => user['id'] === id)[0];
    console.log(filteredUser);
    console.log("--------------")
    return filteredUser['username'];
    
  }

  ngOnInit(){
  }
}
