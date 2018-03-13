import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredients = new EventEmitter<Ingredient>();
  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('tomatoes', 10),
  ];
getIngredients() {
  return this.ingredients.slice();
}
  constructor() {
  }

  addIngredient(ingredient: Ingredient) {
  this.ingredients.push(ingredient);
  }
}
