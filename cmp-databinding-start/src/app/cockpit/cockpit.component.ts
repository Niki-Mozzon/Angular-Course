import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
  selector: "cockpit",
  templateUrl: "cockpit.component.html",
  styleUrls: ["cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output()
  serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output()
  blueprintCreated=new EventEmitter <{serverName:string,serverContent:string}>();
  newServerName = "";
  newServerContent = "";

  ngOnInit(): void {}
  constructor() {}

  onAddServer() {
    this.serverCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent});
    /* this.serverElements.push({
      type: "server",
      name: this.newServerName,
      content: this.newServerContent,
    }); */
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({serverName:this.newServerName,serverContent:this.newServerContent})
    /* this.serverElements.push({
      type: "blueprint",
      name: this.newServerName,
      content: this.newServerContent,
    }); */
  }
}
