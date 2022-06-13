import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {}

  @HostListener('click')
  openDropdown() {
    this.element.nativeElement.classList.toggle('open');
  }
}
