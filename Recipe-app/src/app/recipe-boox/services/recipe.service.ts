import { EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Mammt',
      'Mammt pasta',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg'
    ),
    new Recipe(
      'Soup for poor',
      'Così è la vita',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
