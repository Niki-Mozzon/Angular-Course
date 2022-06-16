import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Recipe } from '../recipe-boox/recipe.model';
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

  insertItem(ingredient: Ingredient) {
    console.log(ingredient);

    this.ingredients.push(ingredient);
  }
}
