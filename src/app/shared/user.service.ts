import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { IUser } from "../user.model";
import {catchError} from 'rxjs/operators';

@Injectable()
export class UserService implements OnInit{
    constructor(private http:HttpClient){

    }
    ngOnInit(){
    }
    getUsers():Observable<IUser[]>{
      return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(catchError(this.handleError<IUser[]>('getUsers',[])));
    }
    getUser(id:number):Observable<IUser>{
      return this.http.get<IUser>('https://jsonplaceholder.typicode.com/users/'+id)
      .pipe(catchError(this.handleError<IUser>('getUser')));
    }
    private handleError<T> (operation='operation',result?:T){
      return (error: any) : Observable<T> =>{
        console.error(error);
        return of(result as T)
      }
    }
}
