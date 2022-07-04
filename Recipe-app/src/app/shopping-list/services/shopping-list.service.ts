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
  ingredientSelected = new Subject<Ingredient>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    const element = this.ingredients.find((x) => x.name == ingredient.name);
    if (!element) {
      this.ingredients.push(ingredient);
    } else {
      element.amount = Number(ingredient.amount);
    }
    //this.ingredientsChanged.emit(this.getIngredients());
    this.ingredientsChangedSubject.next(this.getIngredients());
  }

  deleteIngredient(name: string) {
    const elementIndex = this.ingredients.findIndex((x) => x.name == name);

    if (elementIndex > -1) {
      this.ingredients.splice(elementIndex, 1);
      this.ingredientsChangedSubject.next(this.getIngredients());
    }
  }

  triggerSelected(id: number) {
    const ingredient = this.getIngredients()[id];
    this.ingredientSelected.next(ingredient);
  }
}
