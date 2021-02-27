import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[emailInput]'
})
export class EmailInputDirective{
    constructor(private element: ElementRef){
    }
    @HostListener('focus') onFocus(): void{
        console.log('focus');
    }
    @HostListener('blur') onBlur(): void{
        console.log('blur');
        const value: string = this.element.nativeElement.value;
        if (!value.includes('@')){
            this.element.nativeElement.value = value.toLowerCase() + '@gmail.com';
        }
    }


}
