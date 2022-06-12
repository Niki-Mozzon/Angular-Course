import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[betterBackground]",
})
export class BetterBackgroundDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.renderer.setStyle(
      this.element.nativeElement,
      "background-color",
      "green"
    );
  }

  @HostListener("mouseenter")
  onHover() {
    this.renderer.setStyle(this.element.nativeElement, "padding", "2rem");
  }

  @HostListener("mouseleave")
  onLeave() {
    this.renderer.setStyle(this.element.nativeElement, "padding", "unset");
  }
}
