import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IComment } from 'src/app/comment.model';
import { IPost } from 'src/app/post.model';
import { CommentService } from 'src/app/shared/comment.service';
import { PostService } from 'src/app/shared/post.service';
import { UserService } from 'src/app/shared/user.service';
import { IUser } from 'src/app/user.model';

@Component({
  selector: 'post-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: IPost;
  user: IUser;
  posts: IPost[]
  comments: IComment[];
  constructor( private route: ActivatedRoute,
    private postService: PostService, private userService: UserService, private commentService: CommentService) {
      let response = this.postService.getPost(+this.route.snapshot.params['id'])
      response.subscribe(res => {
        this.post = res;
        this.userService.getUser(this.post.userId).subscribe(user=>{this.user=user});
        this.commentService.getCommentsByPostId(this.post.userId).subscribe(comments=>this.comments=comments);

      });

  }
  ngOnInit() {

  }

}
