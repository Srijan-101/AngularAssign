import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
   

    @ViewChild('nameInput')  nameInput:ElementRef;
    @ViewChild('amountInput') amountInput:ElementRef;

    constructor(private slService: ShoppingListService){}
    
    onAdd(){
      const recipeName: string = this.nameInput.nativeElement.value;
      const recipeAmount: number = parseFloat(this.amountInput.nativeElement.value); // Convert to a number
      const newIngredient = new Ingredient(recipeName,recipeAmount)
      this.slService.addIngredient(newIngredient);
    }

}
