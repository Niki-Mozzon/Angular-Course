import { Component, Inject, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './services/recipe.service';
@Component({
  selector: 'recipe-book',
  templateUrl: 'recipe-book.component.html',
  styleUrls: ['recipe-book.component.css'],
  providers: [RecipeService],
})
export class RecipeBookComponent implements OnInit {
  focusRecipe!: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.setRecipe(recipe);
    });
  }

  setRecipe(recipe: Recipe) {
    this.focusRecipe = recipe;
  }
}
