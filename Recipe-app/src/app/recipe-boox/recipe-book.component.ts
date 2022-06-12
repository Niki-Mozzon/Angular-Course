import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipe-book',
  templateUrl: 'recipe-book.component.html',
  styleUrls: ['recipe-book.component.css'],
})
export class RecipeBookComponent implements OnInit {
  ngOnInit(): void {}

  focusRecipe!: Recipe;

  setRecipe(recipe: Recipe) {
    this.focusRecipe = recipe;
  }
}
