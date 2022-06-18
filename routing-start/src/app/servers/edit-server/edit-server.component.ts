import { ValueConverter } from "@angular/compiler/src/render3/view/template";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { ServersService } from "../servers.service";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit: boolean;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.allowEdit = this.activatedRoute.snapshot.queryParams["allowEdit"];
    console.log("Allow edit: " + this.allowEdit); //gets query parameters
    console.log(this.activatedRoute.snapshot.fragment); //gets fragment
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.allowEdit = params["allowEdit"] == 1 ? true : false;
    });
    this.activatedRoute.fragment.subscribe();
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
