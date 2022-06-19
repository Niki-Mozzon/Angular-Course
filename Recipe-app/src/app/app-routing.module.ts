import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeBookComponent } from './recipe-boox/recipe-book.component';
import { RecipeDetailComponent } from './recipe-boox/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from './recipe-boox/recipe-start/recipe-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipeBookComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: ':name', component: RecipeDetailComponent },
    ],
  },
  { path: 'shop', component: ShoppingListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
