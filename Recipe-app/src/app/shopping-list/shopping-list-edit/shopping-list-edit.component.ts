import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Recipe } from 'src/app/recipe-boox/recipe.model';
import { Ingredient } from 'src/app/share/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'shopping-list-edit',
  templateUrl: 'shopping-list-edit.component.html',
  styleUrls: ['shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {}
  onAddItem(form: NgForm) {
    this.shoppingListService.addIngredient(
      new Ingredient(form.value.itemName, form.value.itemQuantity)
    );
  }
}
