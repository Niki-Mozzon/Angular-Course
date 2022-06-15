import { Component, OnInit } from "@angular/core";
import { AccountService } from "./services/account.serivice";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AccountService],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
  accounts: { name: string; status: string }[] = [];

  constructor(private accountService: AccountService) {}
}
