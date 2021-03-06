import { Component } from "@angular/core";
import { CounterService } from "./services/counter.service";
import { UsersService } from "./services/users.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [UsersService, CounterService],
})
export class AppComponent {}
