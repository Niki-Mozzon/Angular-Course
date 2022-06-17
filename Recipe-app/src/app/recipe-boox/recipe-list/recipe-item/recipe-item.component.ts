import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'recipe-item',
  templateUrl: 'recipe-item.component.html',
  styleUrls: ['recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input('recipeItem')
  recipe!: Recipe;
  @Output()
  recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) {}
  ngOnInit(): void {}

  onRecipeSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
