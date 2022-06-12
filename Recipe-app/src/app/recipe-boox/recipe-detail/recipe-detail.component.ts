import { Component, Input, OnInit } from '@angular/core';
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
}
