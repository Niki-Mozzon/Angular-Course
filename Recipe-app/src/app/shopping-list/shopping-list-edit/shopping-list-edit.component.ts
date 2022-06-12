import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Recipe } from 'src/app/recipe-boox/recipe.model';
import { Ingredient } from 'src/app/share/ingredient.model';

@Component({
  selector: 'shopping-list-edit',
  templateUrl: 'shopping-list-edit.component.html',
  styleUrls: ['shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('itemAmount')
  itemAmountRef!: ElementRef;
  @ViewChild('itemName')
  itemNameRef!: ElementRef;
  @Output()
  addItem = new EventEmitter<Ingredient>();
  ngOnInit(): void {}
  onAddItem() {
    this.addItem.emit(
      new Ingredient(
        this.itemNameRef.nativeElement.value,
        this.itemAmountRef.nativeElement.value
      )
    );
  }
}
