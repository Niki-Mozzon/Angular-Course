import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

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
  ngOnInit(): void {}

  onRecipeSelected() {
    this.recipeSelected.emit();
  }
}
