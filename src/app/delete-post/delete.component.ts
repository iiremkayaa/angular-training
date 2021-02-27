import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from '../post.model';
import { AuthService } from '../shared/auth.service';
import { PostService } from '../shared/post.service';
import { IUser } from '../user.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'delete-post',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeletePostComponent implements OnInit {
  posts: any[];
  users: any[];
  user: IUser;
  searchTerm = '';
  foundedPosts: IPost[];
  authenticatedUser: IUser;
  constructor(private postService: PostService, private router: Router,
              private authService: AuthService) {
    if (!this.authService.loggedInUser) {
      this.router.navigate(['/login']);
    }
  }
  ngOnInit(): void {
    this.authenticatedUser = this.authService.loggedInUser;
    this.postService.getPostsByUserId(this.authenticatedUser.id).subscribe(posts => { this.posts = posts ; console.log(posts)});
  }
  // tslint:disable-next-line:typedef
  deletePost(post: IPost) {
    console.log(post);
    this.postService.deletePost(post.id);
    this.router.navigate(['posts']);
  }
  searchThis(): void {
    this.foundedPosts = this.posts;
    // $('#id').modal()
    if (this.searchTerm) {
      const filtered = this.posts.filter(post => this.filterPosts(post, this.searchTerm.toLowerCase()));
      this.foundedPosts = filtered;
    }
    else {
      // this.postService.getPosts().subscribe(posts => this.posts = posts); todo
    }
  }
  filterPosts(post, word): any {
    return post.body.toLowerCase().includes(word)
      || post.title.toLowerCase().includes(word);
  }
}
