import { EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/share/ingredient.model';

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Flour', 2),
    new Ingredient('Poison', 5),
  ];
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    const element = this.ingredients.find((x) => x.name == ingredient.name);
    if (!element) {
      this.ingredients.push(ingredient);
    } else {
      element.amount += Number(ingredient.amount);
    }
    this.ingredientsChanged.emit(this.getIngredients());
  }
}
