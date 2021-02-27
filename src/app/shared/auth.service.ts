import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userInfo } from 'os';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUser } from '../user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;
  loggedInUser: IUser;
  constructor(private http: HttpClient) {

  }
  /*checkUserIsExist(userName: string, password: string){
    const loginInfo = { username: userName, password };
    let isExist: IUser;
    console.log(loginInfo.username);
    this.http.get<IUser>('http://localhost:3000/users?username=' + loginInfo.username)
    .pipe(catchError(this.handleError<IUser>('getUser'))).subscribe(user => { isExist = user; this.currentUser; });

  }*/
  // tslint:disable-next-line:typedef
  loginUser(userName: string, password: string) {
    const loginInfo = { username: userName, password };
    const isLoggedIn = this.http.get<IUser[]>('http://localhost:3000/users?username=' + loginInfo.username)
      .pipe(catchError(this.handleError<IUser[]>('getUser')));
    isLoggedIn.subscribe(user => {
      if (user !== null || user.length !== 0) {
        this.loggedInUser = user[0];
        return isLoggedIn;
      }
    });
    return isLoggedIn;

  }
  // tslint:disable-next-line:typedef
  logout() {
    this.loggedInUser = null;
    this.currentUser = null;
  }
  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  isAuthenticated(): boolean {
    return !!this.loggedInUser;
  }
  checkUser(): void {
    if (this.loggedInUser) {
      this.currentUser = this.loggedInUser;
    }
    /*const loggedIn = this.http.get<IUser>('https://jsonplaceholder.typicode.com/users/' + 1)
    .pipe(catchError(this.handleError<IUser>('getAuthenticatedUser')));
    loggedIn.subscribe(user => this.currentUser = user);*/
    /*this.http.get('/api/currentIdentity')
    .pipe(tap(data => {
      if(data instanceof Object) {
        this.currentUser = <IUser>data;
      }
    }))
    .subscribe();*/
  }
}
