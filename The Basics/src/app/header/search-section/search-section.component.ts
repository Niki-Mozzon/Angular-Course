import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search-section.component.html',
  styleUrls: ['search-section.component.css'],
})
export class SearchSectionComponent implements OnInit {
  research = '';
  disabled = true;

  constructor() {}
  ngOnInit(): void {}

  makeResearch() {
    this.research = '';
  }

  getItem(event: any) {
    this.research = (<HTMLInputElement>event.target).value;
    if (this.research.length > 0) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
    console.log(this.research.length);
  }
}
