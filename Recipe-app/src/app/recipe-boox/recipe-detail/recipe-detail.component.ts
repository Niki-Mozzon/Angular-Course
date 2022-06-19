import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'recipe-detail',
  templateUrl: 'recipe-detail.component.html',
  styleUrls: ['recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input()
  recipe!: Recipe;

  constructor(
    private shoppingListService: ShoppingListService,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    const name = this.route.snapshot.params['name'];
    this.route.params.subscribe((params: Params) => {
      this.recipe = this.recipeService
        .getRecipes()
        .find((x) => x.name === params['name'])!;
    });
    this.recipe = this.recipeService.getRecipes().find((x) => x.name === name)!;
  }

  setRecipe(recipe: Recipe) {
    this.recipe = recipe;
  }

  addIngredientsToShoppingList() {
    this.recipe.ingredients.forEach((ing) => {
      this.shoppingListService.addIngredient(ing);
    });
  }
}
