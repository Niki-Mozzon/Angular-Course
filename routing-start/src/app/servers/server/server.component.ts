import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data, Router } from "@angular/router";

import { ServersService } from "../servers.service";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(
    private serversService: ServersService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activeRoute.data.subscribe((data: Data) => {
      this.server = data["server"];
    });

    /*    let id: number = this.activeRoute.snapshot.params["id"];
    this.server = this.serversService.getServer(+id);
    this.activeRoute.params.subscribe((param) => {
      id = param["id"];
      this.server = this.serversService.getServer(+id);
    }); */
  }

  onEdit() {
    this.router.navigate(["edit"], {
      relativeTo: this.activeRoute,
      queryParamsHandling: "preserve", //tells Angular to keep (ONLY) the queryParams on the new route
    });
  }
}
