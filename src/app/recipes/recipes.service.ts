import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A test recipe',
      'this is test description',
      'https://c1.staticflickr.com/5/4237/35094182543_f52a0ec1c5_b.jpg',
      [
        new Ingredient('mushrooms', 5),
        new Ingredient('zuccini', 2),
        ]),
    new Recipe('A test recipe',
      'this is test descrfgshsfhsfghiption',
      'https://c1.staticflickr.com/5/4237/35094182543_f52a0ec1c5_b.jpg',
      [
        new Ingredient('eggs', 2),
        new Ingredient('pasta', 1)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  constructor(private slService: ShoppingListService) {
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);


  }
}
