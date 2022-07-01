import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Subscription } from 'rxjs';
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
  editMode:boolean=false;
  constructor(private shoppingListService: ShoppingListService) {}
  ngOnDestroy(): void {
    this.itemSubscriber.unsubscribe();
  }
  ngOnInit(): void {
    this.shoppingListService.ingredientSelected.subscribe((ing: Ingredient) => {
      this.f.setValue({ itemQuantity:0, itemName: ing.name });
      this.editMode=true;

    });
  }
  onAddItem(form: NgForm) {
    this.shoppingListService.addIngredient(
      new Ingredient(form.value.itemName, form.value.itemQuantity)
    );
    this.f.reset();
    this.editMode=false;
  }

  flagAddMode(event:any){
    this.editMode=false;
    console.log(event);
    
    
  }
}
