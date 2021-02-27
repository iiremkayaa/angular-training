import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userInfo } from 'os';
import { IAlbum } from 'src/app/album.model';
import { AlbumService } from 'src/app/shared/album.service';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'album-list',
    templateUrl: './albumlist.component.html',
    styleUrls: ['./albumlist.component.css']
})
export class AlbumListComponent implements OnInit {
    title = 'Album List';
    albums: IAlbum[];
    @Input() userId: number;
    constructor(private albumService: AlbumService, private auth: AuthService,
                private route: Router, private activedRoute: ActivatedRoute) {
            this.activedRoute.data.subscribe((res) => {
                this.albums = res.albums;
            });
    }
    ngOnInit(): void {
        if (this.userId) {
            this.albumService.getAlbumsByUserId(this.userId).subscribe(albums => { this.albums = albums; });
        }
        if (!this.auth.loggedInUser && !this.userId ) {
            this.route.navigate(['/login']);
        }
    }
    isExist(): boolean{
        return this.albums.length > 0;
    }
}
