import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { $ } from 'protractor';
import { filter } from 'rxjs/operators';
import { IPost } from 'src/app/post.model';
import { PostService } from 'src/app/shared/post.service';
import { UserService } from 'src/app/shared/user.service';
import { IUser } from 'src/app/user.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'post-list',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostListComponent implements OnInit {
  posts: IPost[];
  users: IUser[];
  searchTerm = '';
  foundedPosts: IPost[];
  constructor(private postService: PostService, private userService: UserService, private activedRoute: ActivatedRoute){
    this.activedRoute.data.subscribe((res) => {
     this.posts = res.posts;
    });
  }
  // tslint:disable-next-line:typedef
  ngOnInit(){
    // this.postService.getPosts().subscribe(posts => this.posts = posts);
    this.userService.getUsers().subscribe(users => this.users = users);
  }
  getUserName(id: number): any{
    if (this.users){
      const filteredUser = this.users.filter(
        user => user.id === id)[0];
      return filteredUser.username ;
    }
  }
  searchThis(form): void {
    this.foundedPosts = [];
    const searchBy = form.value.search;
    if (searchBy === 'word'){
      if (this.searchTerm) {
        const filtered = this.posts.filter(post => this.filterPosts(post, this.searchTerm.toLowerCase()));
        this.foundedPosts = filtered;
      }
      else{
         this.postService.getPosts();  // .subscribe(posts => this.posts = posts); todo
      }
    }
    if (searchBy === 'user'){
      if (this.searchTerm) {
        const searchedUser = this.getUserByUserName(this.searchTerm);
        if (searchedUser.length > 0){
          const filtered = this.posts.filter(post => this.filterPostsByUser(post, searchedUser[0].id));
          this.foundedPosts = filtered;
        }
      }
      else{
        // this.postService.getPosts().subscribe(posts => this.posts = posts); todo
      }
    }
  }
  filterPosts(post, word): any {
    return  post.body.toLowerCase().includes(word)
     || post.title.toLowerCase().includes(word);
  }
  filterPostsByUser(post, id): any{
    return  post.userId === id;
  }
  getUserByUserName(username: string): any{
    return this.users.filter(user => user.username === username);
  }
}
