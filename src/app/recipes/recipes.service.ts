import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is test description', 'https://c1.staticflickr.com/5/4237/35094182543_f52a0ec1c5_b.jpg'),
    new Recipe('A test recipe', 'this is test descrfgshsfhsfghiption', 'https://c1.staticflickr.com/5/4237/35094182543_f52a0ec1c5_b.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
  constructor() { }

}
