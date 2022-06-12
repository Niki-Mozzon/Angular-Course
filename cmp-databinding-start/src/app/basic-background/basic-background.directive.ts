import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
  selector: "[basicBackground]",
})
export class BasicBackgroundDirective implements OnInit {
  constructor(private element: ElementRef) {}
  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = "black";
    this.element.nativeElement.style.color = "white";
  }
}
