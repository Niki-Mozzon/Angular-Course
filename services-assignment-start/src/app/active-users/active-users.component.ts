import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CounterService } from "../services/counter.service";
import { UsersService } from "../services/users.service";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent {
  constructor(
    public usersService: UsersService,
    public counterService: CounterService
  ) {}

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
    ++this.counterService.activeToinactive;
  }
}
