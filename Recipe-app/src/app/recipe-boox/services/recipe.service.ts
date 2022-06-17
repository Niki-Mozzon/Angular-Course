import { EventEmitter, Inject } from '@angular/core';
import { Ingredient } from 'src/app/share/ingredient.model';
import { Recipe } from '../recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Mammt',
      'Mammt pasta',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg',
      [
        new Ingredient('Carrot', 4),
        new Ingredient('Chicken', 1),
        new Ingredient('Bread', 3),
      ]
    ),
    new Recipe(
      'Soup for poor',
      'Così è la vita',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg',
      [
        new Ingredient('Wine', 1),
        new Ingredient('Beer', 1.2),
        new Ingredient('Caramel', 2),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
