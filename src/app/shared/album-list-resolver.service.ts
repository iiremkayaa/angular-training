import { Injectable } from '@angular/core';
import { ActivatedRoute, Resolve } from '@angular/router';
import { AlbumService } from './album.service';
import { AuthService } from './auth.service';
import { PostService } from './post.service';
@Injectable()
export class AlbumListResolver implements Resolve<any>
{
    constructor(private albumService: AlbumService, private auth: AuthService) {
    }
    // tslint:disable-next-line:typedef
    resolve() {
        if (this.auth.loggedInUser){
            return this.albumService.getAlbumsByUserId(+this.auth.loggedInUser.id);
        }
        return false;
    }
}
