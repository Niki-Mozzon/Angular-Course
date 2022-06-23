import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  userActivatedWithEmit: boolean = false;
  userActivatedWithSubject: boolean = false;
  private emitterSubescription = new Subscription();
  private subjectSubescription = new Subscription();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.emitterSubescription = this.userService.activatedEmitter.subscribe(
      (data) => {
        this.userActivatedWithEmit = data;
      }
    );
    ////////////////////////////////
    this.subjectSubescription = this.userService.activatedSubject.subscribe(
      (data) => {
        this.userActivatedWithSubject = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.emitterSubescription.unsubscribe();
    this.subjectSubescription.unsubscribe();
  }
}
