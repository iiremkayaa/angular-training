import { Injectable } from '@angular/core';
import { isObservable, Observable, of, Subject } from 'rxjs';
import { IPost } from '../post.model';
import {catchError} from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map } from 'rxjs/operators';
import { updateShorthandPropertyAssignment } from 'typescript';
interface IUserLoggedIn{
  id: number;
  userName: string;
  firstName: string;
  lastName: string;
}
@Injectable()
export class PostService{
    postList: IPost[];
    constructor(private http: HttpClient){

    }
    getPosts(): Observable<IPost[]>{
      return this.http.get<IPost[]>('http://localhost:3000/posts')
      .pipe(catchError(this.handleError<IPost[]>('getPosts', [])));
    }
    getPost(id: number): Observable<IPost>{
      const post = this.http.get<IPost>('http://localhost:3000/posts/' + id);
      return post.pipe(catchError(this.handleError<IPost>('getPost')));
    }
    getPostsByUserId(userId): Observable<IPost[]>{
      const post = this.http.get<IPost[]>('http://localhost:3000/posts?userId=' + userId);
      return post.pipe(catchError(this.handleError<IPost[]>('getPostsByUserId', [])));
    }
    deletePost(id: number): void {
      console.log(id);
      this.http.delete('http://localhost:3000/posts/' + id)
        .pipe(catchError(this.handleError('deletePost')))
        .subscribe(() => console.log('Delete successful'));
    }
    createPost(post: IPost): void {
      const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
      this.http.post<IPost>('http://localhost:3000/posts', post, options )
      .pipe(catchError(this.handleError<IPost>('saveEvent')))
      .subscribe(response => {
      });
    }
    // tslint:disable-next-line:typedef
    private handleError<T>(operation= 'operation', result?: T){
      return (error: any): Observable<T> => {
        console.error(error);
        return of(result as T);
      };
    }

}
