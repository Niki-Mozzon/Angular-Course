import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Recipe } from '../recipe-boox/recipe.model';
import { LoggingService } from '../services/logging.service';
import { Ingredient } from '../share/ingredient.model';

@Component({
  selector: 'shopping-list',
  templateUrl: 'shopping-list.component.html',
  styleUrls: ['shopping-list.component.css'],
  providers: [LoggingService],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Flour', 2),
    new Ingredient('Poison', 5),
  ];

  constructor(private logger: LoggingService) {}
  ngOnInit(): void {}

  insertItem(ingredient: Ingredient) {
    console.log(ingredient);

    this.ingredients.push(ingredient);
  }

  logItem(element: any) {
    this.logger.logSomething(element.target.textContent);
  }
}
