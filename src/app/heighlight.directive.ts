import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeighlight]'
})
export class HeighlightDirective {

  constructor( private el:ElementRef, private r:Renderer2) {
   }

   @HostListener('mouseenter') onMouseEnter(){
    this.r.addClass(this.el.nativeElement, 'highlight');
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.r.removeClass(this.el.nativeElement, 'highlight');
   }



}
