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

  onSelectRecipeBook() {
    this.select.emit('');
  }

  onSelectRecipeList() {
    this.select.emit('recipeList');
  }

  onSelectShoppingList() {
    this.select.emit('shoppingList');
  }
}
