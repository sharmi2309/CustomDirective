import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'  
})
export class MyDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string = '';
  @HostBinding('style.color') textColor: string = 'black';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover') onMouseOver() {
    this.textColor = 'red';
    this.backgroundColor = 'black';
  }

  @HostListener('mouseout') onMouseOut() {
    this.textColor = 'black';
    this.backgroundColor = 'lightblue';
  }
}
