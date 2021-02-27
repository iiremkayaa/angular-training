import { Component, Input, OnInit } from '@angular/core';
import { IPhoto } from 'src/app/photo.model';
import { PhotoService } from 'src/app/shared/photo.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'photo-list',
    templateUrl: './photolist.component.html',
    styleUrls: ['./photolist.component.css']
})
export class PhotoListComponent implements OnInit{
    @Input() albumId: number;
    photos: IPhoto[];
    constructor(private photoService: PhotoService){

    }
    ngOnInit(): void{
        this.photoService.getPhotosByAlbumId(this.albumId).subscribe(photos => this.photos = photos);
    }
    counter(i: number): any {
        return new Array(i);
    }
}
