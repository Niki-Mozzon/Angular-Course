import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'recipe-book',
  templateUrl: 'recipe-book.component.html',
  styleUrls: ['recipe-book.component.css'],
  providers: [RecipeService],
})
export class RecipeBookComponent implements OnInit {
  ngOnInit(): void {}

  focusRecipe!: Recipe;

  setRecipe(recipe: Recipe) {
    this.focusRecipe = recipe;
  }
}
