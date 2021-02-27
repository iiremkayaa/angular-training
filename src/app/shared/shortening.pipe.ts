import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'body'})
export class ShorteningPipe implements PipeTransform{
    transform(value: string): string {
        if ( value.length > 10){
            return value.substring(0, 100) + '...';
        }
        return value;
    }
}
