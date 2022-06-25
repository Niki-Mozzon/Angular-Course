import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../share/ingredient.model';
import { ShoppingListService } from './services/shopping-list.service';

@Component({
  selector: 'shopping-list',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  onIngredientsChanged: Subscription = new Subscription();
  constructor(private shoppingList: ShoppingListService) {}
  ngOnInit(): void {
    this.ingredients = this.shoppingList.getIngredients();
    //this.shoppingList.ingredientsChanged.subscribe((ings) => {
    this.onIngredientsChanged =
      this.shoppingList.ingredientsChangedSubject.subscribe((ings) => {
        this.ingredients = ings;
      });
  }

  ngOnDestroy(): void {
    this.onIngredientsChanged.unsubscribe();
  }
}
