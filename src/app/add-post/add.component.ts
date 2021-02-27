import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { PostService } from '../shared/post.service';
import { IUser } from '../user.model';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'add-post',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddPostComponent implements OnInit{
  title: FormControl;
  body: FormControl;
  postForm: FormGroup;
  isSubmitted = false;
  authenticatedUser: IUser;
  constructor(private postService: PostService, private router: Router, private authService: AuthService){
    if (!this.authService.loggedInUser){
      this.router.navigate(['/login']);
    }
  }
  // tslint:disable-next-line:typedef
  ngOnInit(){
    this.authenticatedUser = this.authService.loggedInUser;
    this.title = new FormControl('', Validators.required);
    this.body = new FormControl('', Validators.required);
    this.postForm = new FormGroup({
      title: this.title,
      body: this.body
    });
  }
  // tslint:disable-next-line:typedef
  sendPost(data: any){
    if (!this.postForm.invalid){
      data.userId = this.authenticatedUser.id;
      this.postService.createPost(data);
      this.postForm.reset();
      alert('Post is created!');
      this.router.navigate(['/posts']);
    }

  }
}
