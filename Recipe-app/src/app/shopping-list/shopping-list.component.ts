import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Recipe } from '../recipe-boox/recipe.model';
import { Ingredient } from '../share/ingredient.model';
import { ShoppingListService } from './services/shopping-list.service';

@Component({
  selector: 'shopping-list',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private shoppingList: ShoppingListService) {}
  ngOnInit(): void {
    this.ingredients = this.shoppingList.getIngredients();
    this.shoppingList.ingredientsChanged.subscribe((ings) => {
      this.ingredients = ings;
    });
  }
}
