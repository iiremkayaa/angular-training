import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IAlbum } from '../album.model';

@Injectable()
export class AlbumService{
    constructor(private http: HttpClient){

    }
    getAlbums(): Observable<IAlbum[]> {
        const albums = this.http.get<IAlbum[]>('http://localhost:3000/albums');
        return albums.pipe(catchError(this.handleError<IAlbum[]>('getAlbums', [])));
    }
    getAlbum(id: number): Observable<IAlbum>{
        const album = this.http.get<IAlbum>('http://localhost:3000/albums/' + id);
        return album.pipe(catchError(this.handleError<IAlbum>('getAlbum')));
    }
    getAlbumsByUserId(id: number): Observable<IAlbum[]>{
      const album = this.http.get<IAlbum[]>('http://localhost:3000/albums?userId=' + id);
      return album.pipe(catchError(this.handleError<IAlbum[]>('getAlbumByUserId')));
    }
    // tslint:disable-next-line:typedef
    private handleError<T>(operation= 'operation', result?: T){
        return (error: any): Observable<T> => {
          console.error(error);
          return of(result as T);
        };
      }
}
