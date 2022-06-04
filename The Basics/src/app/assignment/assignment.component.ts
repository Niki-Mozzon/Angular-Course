import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'assignment',
  templateUrl: 'assignment.component.html',
  styleUrls: ['assignment.component.css'],
})
export class AssignmentComponent implements OnInit {
  hidden = true;
  swearing = [];
  constructor() {}
  ngOnInit(): void {}

  toggleVisibility() {
    this.hidden = !this.hidden;
    this.swearing.push(Date.now());
  }

  getRule(counter: any) {
    const index = this.swearing.indexOf(counter);
    return index > 4;
  }
}
