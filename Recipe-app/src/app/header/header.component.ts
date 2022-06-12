import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'header-app',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output()
  select = new EventEmitter<string>();

  ngOnInit(): void {}

  onSelect(selection: string) {
    this.select.emit(selection);
  }
}
