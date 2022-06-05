import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "server-element",
  templateUrl: "server-element.component.html",
  styleUrls: ["server-element.component.css"],
})
export class ServerElementComponent implements OnInit {
  @Input("serverEl")
  element: { type: string; name: string; content: string };
  ngOnInit(): void {}
  constructor() {}
}
