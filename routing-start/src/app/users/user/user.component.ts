import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  user: { id: number; name: string };

  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit() {
    this.user = {
      id: this.activeRoute.snapshot.params["id"],
      name: this.activeRoute.snapshot.params["name"],
    }; //the snapshot is the first time the page is loaded
    this.activeRoute.params.subscribe((params: Params) => {
      //if we change values from the same route (with an id and name already existing) we'd need to subscribe to the event that will occur whenever the route changes to tell Angular to load new data
      this.user = {
        id: params["id"],
        name: params["name"],
      };
    });
  }
}
