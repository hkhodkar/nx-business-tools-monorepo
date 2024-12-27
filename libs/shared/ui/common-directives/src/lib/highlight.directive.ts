import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  Input,
} from '@angular/core';

@Directive({
  selector: 'span:not([noHighlight]), [btLibsUiHighlight]',
  standalone: true,
})
export class HighlightDirective {
  private el: HTMLElement = inject(ElementRef).nativeElement;

  // @HostBinding('style.background') get color() {
  //   return 'red';
  // }

  @Input() background = '#123344';
  @Input() textColor = 'white';

  @HostListener('mouseenter')
  onMouseOver() {
    this.el.style.backgroundColor = this.background;
    this.el.style.borderRadius = '0.5rem';
    this.el.style.color = this.textColor;
    this.el.style.transition = 'all 500ms';
  }

  @HostListener('mouseleave')
  onMouseOut() {
    this.el.style.backgroundColor = 'unset';
    this.el.style.color = 'black';
  }
}
