import { Directive, ElementRef, HostListener } from '@angular/core';
@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[phoneInput]'
})
export class PhoneInputDirective {
    constructor(private element: ElementRef) {
    }
    @HostListener('focus') onFocus(): void {
        console.log('focus');
    }
    @HostListener('input', ['$event.target.value'])
    onInput(value): void {
        if (isNaN(value)){
            this.element.nativeElement.value = value.substring(0, value.length - 1);
        }

    }
}
