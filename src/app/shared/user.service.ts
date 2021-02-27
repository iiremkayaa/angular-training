import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { IUser } from '../user.model';
import {catchError} from 'rxjs/operators';

@Injectable()
export class UserService{
    constructor(private http: HttpClient){

    }

    getUsers(): Observable<IUser[]>{
      return this.http.get<IUser[]>('http://localhost:3000/users')
      .pipe(catchError(this.handleError<IUser[]>('getUsers', [])));
    }
    getUser(id: number): Observable<IUser>{
      return this.http.get<IUser>('http://localhost:3000/users/' + id)
      .pipe(catchError(this.handleError<IUser>('getUser')));
    }
    getUserByPostId(id: number): Observable<IUser[]>{
      const usersByUserId = this.http.get<IUser[]>('http://localhost:3000/users?postId=' + id);
      return usersByUserId.pipe(catchError(this.handleError<IUser[]>('getUsersByPostId', [])));
    }
    // tslint:disable-next-line:typedef
    updateUser(user: IUser) {
      console.log(user);
      const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};
      this.http.put('http://localhost:3000/users/' + user.id, user, options)
      .pipe(catchError(this.handleError<IUser>('updateUser')))
      .subscribe(response => {
      });
    }
    // tslint:disable-next-line:typedef
    deleteUser(id: number) {
      this.http.delete('http://localhost:3000/users/' + id)
      .pipe(catchError(this.handleError('deleteUser')));
    }
    postUser(user: IUser): void{
      const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
      this.http.post('http://localhost:3000/users', user, options).pipe(catchError(this.handleError('addUser')))
      .subscribe();
    }
    // tslint:disable-next-line:typedef
    private handleError<T>(operation= 'operation', result?: T){
      return (error: any): Observable<T> => {
        console.error(error);
        return of(result as T);
      };
    }
}
