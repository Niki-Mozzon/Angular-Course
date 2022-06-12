import { Directive, HostBinding, OnInit } from "@angular/core";

@Directive({
  selector: "[easierBackground]",
})
export class EasierBackgroundDirective implements OnInit {
  ngOnInit(): void {}
  @HostBinding("style.backgroundColor")
  backgroundColor = "orangered";
  constructor() {}
}
