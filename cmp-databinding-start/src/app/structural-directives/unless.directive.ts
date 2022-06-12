import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

@Directive({
  selector: "[appUnless]",
})
export class UnlessDirective implements OnInit {
  ngOnInit(): void {}

  @Input()
  set appUnless(condition: boolean) {
    if (!condition) {
      this.container.createEmbeddedView(this.template);
    } else {
      this.container.clear();
    }
  }
  constructor(
    private template: TemplateRef<any>,
    private container: ViewContainerRef
  ) {}
}
