import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CounterService } from "../services/counter.service";
import { UsersService } from "../services/users.service";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent {
  constructor(
    public usersService: UsersService,
    public counterService: CounterService
  ) {}

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
    ++this.counterService.inactiveToActive;
  }
}
