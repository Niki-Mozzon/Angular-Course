import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Recipe } from 'src/app/recipe-boox/recipe.model';
import { Ingredient } from 'src/app/share/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'shopping-list-edit',
  templateUrl: 'shopping-list-edit.component.html',
  styleUrls: ['shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  /* @ViewChild('itemAmount')
  itemAmountRef!: ElementRef;
  @ViewChild('itemName')
  itemNameRef!: ElementRef; */

  shoppingForm!: FormGroup;

  constructor(private shoppingListService: ShoppingListService) {}
  ngOnInit(): void {
    this.shoppingForm = new FormGroup({
      itemName: new FormControl(null, Validators.required),
      itemQuantity: new FormControl(null, [
        Validators.required,
        Validators.min(1),
      ]),
    });
  }

  onAddItem() {
    this.shoppingListService.addIngredient(
      new Ingredient(
        this.shoppingForm.get('itemName')?.value,
        this.shoppingForm.get('itemQuantity')?.value
      )
    );
  }

  onRemoveItem() {
    this.shoppingListService.removeIngredient(
      new Ingredient(
        this.shoppingForm.get('itemName')?.value,
        this.shoppingForm.get('itemQuantity')?.value
      )
    );
  }

  clearForm() {
    this.shoppingForm.setValue({ itemQuantity: '', itemName: '' });
  }
  /* onAddItem() {
    this.shoppingListService.addIngredient(
      new Ingredient(
        this.itemNameRef.nativeElement.value,
        this.itemAmountRef.nativeElement.value
      )
    );
  } */
}
