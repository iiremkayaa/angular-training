import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IComment } from '../comment.model';
import { IPost } from '../post.model';

@Injectable()
export class CommentService{
    constructor(private http: HttpClient){
    }
    getComments(): Observable<IComment[]>{
       // return of(comments);
        return this.http.get<IComment[]>('http://localhost:3000/comments')
      .pipe(catchError(this.handleError<IComment[]>('getComments', [])));
    }
    getComment(id: number): Observable<IComment>{
      const comment = this.http.get<IComment>('http://localhost:3000/comments/' + id);
      return comment.pipe(catchError(this.handleError<IComment>('getComment')));
    }
    getCommentsByPostId(postId): Observable<IComment[]>{
      const commentList = this.http.get<IComment[]>('http://localhost:3000/comments?postId=' + postId);
      return commentList.pipe(catchError(this.handleError<IComment[]>('getCommentsByPostId', [])));
    }
    postComment(comment: IComment): void{
      const options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
      this.http.post<IComment>('http://localhost:3000/comments', comment, options )
      .pipe(catchError(this.handleError<IComment>('sendComment')))
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
