import { Component, OnInit } from '@angular/core';
import { FirstService } from './first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [FirstService],
})
export class FirstComponent implements OnInit {
  user?: { name: string };
  isLoggedIn: boolean = false;
  constructor(private firstService: FirstService) {}

  ngOnInit(): void {
    this.user = this.firstService.getUser();
  }
}
