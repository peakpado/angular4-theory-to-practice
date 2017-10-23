

import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[ccCardHover]'
})
export class CardHoverDirective {
  @HostBinding('class.card-outline-primary')
  private ishovering: boolean;

  @Input('ccCardHover') config = {
    querySelector: '.card-text'
  };

  constructor(private el: ElementRef, private renderer: Renderer) {
    // renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }



  @HostListener('mouseover')
  onMouseOver() {
    const part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(part, 'display', 'block');
    this.ishovering = true;
  }

  @HostListener('mouseout')
  onMouseOut() {
    const part = this.el.nativeElement.querySelector(this.config.querySelector);
    this.renderer.setElementStyle(part, 'display', 'none');
    this.ishovering = false;
  }
}
