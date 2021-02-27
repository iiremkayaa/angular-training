import { Component, Input, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/shared/comment.service';
import { IComment } from '../comment.model';
import { IPost } from '../post.model';
import { AuthService } from '../shared/auth.service';
import { IUser } from '../user.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements  OnInit {
  @Input() post: IPost[];
  title: FormControl;
  body: FormControl;
  commentForm: FormGroup;
  authenticatedUser: IUser;
  invalidOperation = false;
  constructor( private commentService: CommentService, private authService: AuthService) {
  }
  ngOnInit(): void{
    this.authenticatedUser = this.authService.loggedInUser;
    this.title = new FormControl('', Validators.required);
    this.body = new FormControl('', Validators.required);
    this.commentForm = new FormGroup({
      title: this.title,
      body: this.body
    });
  }
  sendComment(form): void{
    if (this.authenticatedUser){
      if (form.valid){
        const comment = form.value;
        comment.email = 'example@gmail.com';
        // tslint:disable-next-line:no-string-literal
        comment.postId = this.post['id'];
        this.commentService.postComment(comment);
        alert('Comment sent!');
        this.commentForm.reset();
      }
    }
    else{
      this.invalidOperation = true;
    }
  }

}
