import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { FirstService } from './first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [FirstService, DataService],
})
export class FirstComponent implements OnInit {
  user?: { name: string };
  data?: string;
  isLoggedIn: boolean = false;
  constructor(
    private firstService: FirstService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.user = this.firstService.getUser();
    this.dataService.getData().then((data) => {
      this.data = data;
    });
  }
}
