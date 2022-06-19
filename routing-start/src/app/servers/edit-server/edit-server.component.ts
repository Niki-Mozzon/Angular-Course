import { ValueConverter } from "@angular/compiler/src/render3/view/template";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observable } from "rxjs";

import { ServersService } from "../servers.service";
import { ICanDeactivate } from "./can-deactivate-guard.service";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
//in order to have a deactivation guard we neeed to make it implement a method call "Deactivate", I did it using the inteface I made
export class EditServerComponent implements OnInit, ICanDeactivate {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit: boolean;
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  canDeactivate(): boolean | Promise<boolean> | Observable<boolean> {
    if (!this.allowEdit) {
      true;
    }
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      !this.changesSaved
    ) {
      return confirm(
        "You didn't save your changes, if you leave without saving they'll be lost!"
      );
    }
    return true;
  }

  ngOnInit() {
    //console.log("Fragment: " + this.activatedRoute.snapshot.fragment); //gets fragment
    this.getAllowEdit();
    this.getServer();
  }

  getAllowEdit() {
    this.allowEdit = this.activatedRoute.snapshot.queryParams["allowEdit"];
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.allowEdit = params["allowEdit"] == 1 ? true : false;
    });
    console.log("Allow edit: " + this.allowEdit); //gets query parameters
  }

  getServer() {
    let id: number = +this.activatedRoute.snapshot.params["id"];
    console.log("Server id: " + id);
    this.activatedRoute.params.subscribe((params) => {
      id = +params["id"];
      this.serversService.getServer(id);
    });

    this.server = this.serversService.getServer(+id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(["../"], { relativeTo: this.activatedRoute });
  }
}
