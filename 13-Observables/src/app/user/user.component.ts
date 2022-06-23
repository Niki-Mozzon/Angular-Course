import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  id!: number;
  subscription?: Subscription;
  customObs?: any;
  constructor(private route: ActivatedRoute) {}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
    });

    if (this.id === 1) {
      this.customObs = new Observable((observer) => {
        let count: number = 0;
        setInterval(() => {
          count++;
          observer.next(count);
        }, 1000);
      });

      this.subscription = this.customObs.subscribe((count: number) => {
        console.log('Custom obs fires: ' + count);
      });
    }
  }
}
