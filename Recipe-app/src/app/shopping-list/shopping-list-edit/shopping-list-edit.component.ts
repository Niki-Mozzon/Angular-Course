import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscriber, Subscription } from 'rxjs';
import { Recipe } from 'src/app/recipe-boox/recipe.model';
import { Ingredient } from 'src/app/share/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'shopping-list-edit',
  templateUrl: 'shopping-list-edit.component.html',
  styleUrls: ['shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  itemSubscriber = new Subscription();
  @ViewChild('f')
  f!: NgForm;
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnDestroy(): void {
    this.itemSubscriber.unsubscribe();
  }
  ngOnInit(): void {
    this.shoppingListService.ingredientSelected.subscribe((ing: Ingredient) => {
      this.f.setValue({ itemQuantity: ing.amount, itemName: ing.name });
    });
  }
  onAddItem(form: NgForm) {
    this.shoppingListService.addIngredient(
      new Ingredient(form.value.set.itemName, form.value.itemQuantity)
    );
  }
}
