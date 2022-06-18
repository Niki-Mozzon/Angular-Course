import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  paramsSubscription: Subscription;

  constructor(private activeRoute: ActivatedRoute) {}
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
    //Since we subscribeb on ngOnInit() to this event, the subscription would stay in memory listening something that will never ever happer so with this command we explicitly tell Angular to unsubscribe to the listener whenever the component is destroyed.. IN THIS CASE ANGULAR UNSUBSCRIBE FROM THIS LISTENER BY ITSELF INDEPENDENTLY IF WE SPECIFIED OR NOT, IT'S JUST A GOOD PRACTICE TO DO IT!!
  }

  ngOnInit() {
    this.user = {
      id: this.activeRoute.snapshot.params["id"],
      name: this.activeRoute.snapshot.params["name"],
    }; //the snapshot is the first time the page is loaded

    this.paramsSubscription = this.activeRoute.params.subscribe(
      (params: Params) => {
        //if we change values from the same route (with an id and name already existing) we'd need to subscribe to the event that will occur whenever the route changes to tell Angular to load new data
        this.user = {
          id: params["id"],
          name: params["name"],
        };
      }
    );
  }
}
