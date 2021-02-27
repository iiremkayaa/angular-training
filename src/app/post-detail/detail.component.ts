import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IComment } from 'src/app/comment.model';
import { IPost } from 'src/app/post.model';
import { CommentService } from 'src/app/shared/comment.service';
import { PostService } from 'src/app/shared/post.service';
import { UserService } from 'src/app/shared/user.service';
import { IUser } from 'src/app/user.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'post-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class PostDetailComponent implements OnInit  {
  post: IPost;
  user: IUser;
  posts: IPost[];
  comments: IComment[];
  name: FormControl;
  body: FormControl;
  commentForm: FormGroup;
  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.name = new FormControl('', Validators.required);
    this.body = new FormControl('', Validators.required);
    this.commentForm = new FormGroup({
      name: this.name,
      body: this.body
    });
    /*const response = this.postService.getPost(+this.route.snapshot.params.id);
    response.subscribe(res => {
      this.post = res;
      this.userService.getUser(this.post.userId).subscribe(user => {this.user = user; });
      this.commentService.getCommentsByPostId(this.post.userId).subscribe(comments => this.comments = comments);
    });*/
  }
  constructor( private route: ActivatedRoute, private postService: PostService,
               private userService: UserService,
               private commentService: CommentService , private activedRoute: ActivatedRoute) {
      this.activedRoute.data.subscribe((res) => {
        this.post = res.post;
        this.userService.getUser(this.post.userId).subscribe(user => {this.user = user; });
        this.commentService.getCommentsByPostId(this.post.id).subscribe(comments => this.comments = comments);
       });

  }

}
