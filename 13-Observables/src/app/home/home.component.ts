import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  interval!: Subscription;

  constructor() {}
  ngOnInit(): void {
    this.interval = interval(500).subscribe((count) => {
      console.log(count);
    });
  }

  ngOnDestroy(): void {
    this.interval.unsubscribe();
  }
}
