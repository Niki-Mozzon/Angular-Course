import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { HeaderComponent } from './header/header.component';
import { RecipeBookComponent } from './recipe-boox/recipe-book.component';
import { RecipeDetailComponent } from './recipe-boox/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-boox/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-boox/recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-boox/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { ShoppingListService } from './shopping-list/services/shopping-list.service';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeBookComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
