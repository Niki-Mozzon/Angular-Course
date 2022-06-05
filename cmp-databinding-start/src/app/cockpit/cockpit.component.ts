import { Component, OnInit } from "@angular/core";

@Component({
  selector: "cockpit",
  templateUrl: "cockpit.component.html",
  styleUrls: ["cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  newServerName = "";
  newServerContent = "";

  ngOnInit(): void {}
  constructor() {}

  onAddServer() {
    /* this.serverElements.push({
      type: "server",
      name: this.newServerName,
      content: this.newServerContent,
    }); */
  }

  onAddBlueprint() {
    /* this.serverElements.push({
      type: "blueprint",
      name: this.newServerName,
      content: this.newServerContent,
    }); */
  }
}
