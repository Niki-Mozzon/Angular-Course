import { Component, Input, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'recipe-detail',
  templateUrl: 'recipe-detail.component.html',
  styleUrls: ['recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  ngOnInit(): void {}
  @Input()
  recipe!: Recipe;

  setRecipe(recipe: Recipe) {
    this.recipe = recipe;
  }

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredientsToShoppingList() {
    this.recipe.ingredients.forEach((ing) => {
      this.shoppingListService.addIngredient(ing);
    });
  }
}
