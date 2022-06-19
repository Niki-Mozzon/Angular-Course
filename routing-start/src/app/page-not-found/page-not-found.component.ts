import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Data } from "@angular/router";

@Component({
  selector: "app-page-not-found",
  templateUrl: "page-not-found.component.html",
  styleUrls: ["page-not-found.component.css"],
})
export class PageNotFoundComponent implements OnInit {
  message: string;
  ngOnInit(): void {}
  constructor(private activeRoute: ActivatedRoute) {
    this.message = activeRoute.snapshot.data["message"];
    activeRoute.data.subscribe((data: Data) => {
      this.message = data["message"];
    });
    console.log(this.message);
  }
}
