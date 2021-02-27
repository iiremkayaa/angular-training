import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IPhoto } from '../photo.model';
import { catchError } from 'rxjs/operators';

@Injectable()
export class PhotoService{
    constructor(private http: HttpClient){

    }
    getPhotosByAlbumId(id: number): Observable<IPhoto[]>{
        const album = this.http.get<IPhoto[]>('http://localhost:3000/photos?albumId=' + id);
        return album.pipe(catchError(this.handleError<IPhoto[]>('getPhotosByAlbumId')));
    }
    // tslint:disable-next-line:typedef
    private handleError<T>(operation= 'operation', result?: T){
        return (error: any): Observable<T> => {
          console.error(error);
          return of(result as T);
        };
      }
}
