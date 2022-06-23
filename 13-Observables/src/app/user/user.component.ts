import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, map, Observable, Subscription } from 'rxjs';

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
    this.subscription?.unsubscribe(); //I unsuscribe from the custom observer
  }
  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
    });

    if (this.id === 1) {
      this.customObs = new Observable((observer) => {
        //I create the custom oberserver
        let count: number = 0;
        setInterval(() => {
          count++;
          if (count > 10) {
            observer.error('The count was bigger than 5!'); // I throw an error if bigger than n, an error stops the observer but it doesn not complete it
          }
          if (count > 7) {
            observer.complete(); // I tell when to complete the obeserver, the oberserver will unsubscribe automatically, it doesn't take args
          }
          observer.next(count); //trigger the observer
        }, 1000);
      });

      this.subscription = this.customObs
        .pipe(
          // a pipeline is a function that stays between the observer and the subscription, it influences the data just for the subscription
          filter((data: number) => {
            return data > 3; //filters all the data bigger than n
          }),
          map((data: number) => {
            return 'Modified on pipe with map method => ' + data;
          })
        )
        .subscribe(
          (count: number) => {
            //Do this when it gets triggered
            console.log('Custom obs fires: ' + count);
          },
          (error: string) => {
            //Do this when there is an error
            alert(error);
          },
          () => {
            //Do this once completed
            console.log('Complete!');
          }
        );
    }
  }
}
