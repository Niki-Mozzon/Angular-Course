import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe-boox/recipe.model';
import { RecipeService } from '../recipe-boox/services/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: 'recipe-edit.component.html',
  styleUrls: ['recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  recipe?: Recipe;
  editMode: boolean = false;
  form!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.recipe = this.recipeService.getRecipes()[+id];
      //this.editMode = params['id'] != null;
    });
    this.form = new FormGroup({
      nameRecipe: new FormControl(this.recipe?.name, Validators.required),
      imageURLRecipe: new FormControl(this.recipe?.imagePath),
      descriptionRecipe: new FormControl(this.recipe?.description),
      ingredientsRecipe: new FormArray(
        this.recipe?.ingredients.map((ing) => {
          return new FormGroup({
            nameIngredient: new FormControl(ing.name, Validators.required),
            amountIngredient: new FormControl(ing.amount, [
              Validators.required,
              Validators.min(0.1),
            ]),
          });
        }) || []
      ),
    });
  }

  getIngredientsControlArray() {
    return (<FormArray>this.form.get('ingredientsRecipe')).controls;
  }

  onSubmit() {
    console.log(this.form.valid);
  }

  addIngredientControl() {
    (<FormArray>this.form.get('ingredientsRecipe')).controls.push(
      new FormGroup({
        nameIngredient: new FormControl(null, Validators.required),
        amountIngredient: new FormControl(null, [
          Validators.required,
          Validators.min(0.1),
        ]),
      })
    );
  }
}
