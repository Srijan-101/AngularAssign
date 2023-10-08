import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";


@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[] = [
        new Recipe('A test Recipe','This is recipe','https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/chana-masala-recipe.jpg',[
           new Ingredient('Meat',1),
           new Ingredient('French fries',12),
        ]),
        new Recipe('Momo ','This is Momo','data:image/jpeg;base64,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',
        [
           new Ingredient('Apple',20),
           new Ingredient('French fries',52),
           new Ingredient('French fries',25),
        ]
        )
   ];


   constructor(private slService : ShoppingListService){}

   getRecipes(){
      return this.recipes.slice();
   }

   addIngredientsToShoppingList(Ingredients:Ingredient[]){
      console.log(Ingredients);
      this.slService.addIngredients(Ingredients);
   }
}