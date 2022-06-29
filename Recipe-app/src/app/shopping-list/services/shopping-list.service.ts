import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/share/ingredient.model';

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Flour', 2),
    new Ingredient('Poison', 5),
  ];
  //ingredientsChanged = new EventEmitter<Ingredient[]>();
  ingredientsChangedSubject = new Subject<Ingredient[]>();

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
    //this.ingredientsChanged.emit(this.getIngredients());
    this.ingredientsChangedSubject.next(this.getIngredients());
  }

  removeIngredient(ingredient: Ingredient) {
    const element = this.ingredients.find((x) => x.name == ingredient.name);
    if (element) {
      if (ingredient.amount >= element.amount) {
        const index = this.ingredients.indexOf(element);

        this.ingredients.splice(index, 1);
      } else {
        element.amount -= Number(ingredient.amount);
      }
    }
    this.ingredientsChangedSubject.next(this.getIngredients());
  }
}
