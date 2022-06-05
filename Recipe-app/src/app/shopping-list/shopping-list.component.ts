import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../share/ingredient.model';

@Component({
  selector: 'shopping-list',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Flour', 2),
    new Ingredient('Poison', 5),
  ];
  constructor() {}
  ngOnInit(): void {}
}
