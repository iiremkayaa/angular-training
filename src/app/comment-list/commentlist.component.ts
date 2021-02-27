import { Component, Input, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/shared/user.service';
import { IComment } from '../comment.model';
import { IPost } from '../post.model';
import { AuthService } from '../shared/auth.service';
import { IUser } from '../user.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'comment-list',
  templateUrl: './commentlist.component.html',
  styleUrls: ['./commentlist.component.css']
})
export class CommentListComponent implements  OnInit {
  @Input() comments: IComment[];
  @Input() post: IPost[];
  name: FormControl;
  body: FormControl;
  commentForm: FormGroup;
  constructor(private userService: UserService) {

  }
  ngOnInit(): void{
    this.name = new FormControl('', Validators.required);
    this.body = new FormControl('', Validators.required);
    this.commentForm = new FormGroup({
      name: this.name,
      body: this.body
    });
  }
  getUsername(id: number): string{
    let username: string;
    this.userService.getUser(id).subscribe( res => {
       username = res.username;
       return res.username;
       });
    return username;

  }
}
