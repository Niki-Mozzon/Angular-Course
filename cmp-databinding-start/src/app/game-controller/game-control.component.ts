import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "game-control",
  templateUrl: "game-control.component.html",
  styleUrls: ["game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  @Output("start")
  event = new EventEmitter<{ numb: number }>();
  num: number = 0;
  nums: number[] = [];
  interval;
  ngOnInit(): void {}

  onStart() {
    this.interval = setInterval(() => {
      console.log(this.num);
      this.event.emit({ numb: this.num++ });
      this.nums.push(this.num);
    }, 1000);
  }

  onStop() {
    clearInterval(this.interval);
    console.log("Should stop..");
  }
}
