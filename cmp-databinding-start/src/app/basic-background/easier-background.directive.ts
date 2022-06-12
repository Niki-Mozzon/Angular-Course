import { Directive, HostBinding, Input, OnInit } from "@angular/core";

@Directive({
  selector: "[easierBackground]",
})
export class EasierBackgroundDirective implements OnInit {
  @Input()
  backgroundColor;
  @HostBinding("style.backgroundColor")
  backgroundColorDefault;
  @Input()
  @HostBinding("style.color")
  color;
  ngOnInit(): void {
    this.backgroundColorDefault = this.backgroundColor;
  }
  constructor() {}
}
