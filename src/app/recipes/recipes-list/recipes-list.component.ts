import { Component,OnInit} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

    recipes:Recipe[];
    
    constructor(private RecipeService:RecipeService){}
       
     ngOnInit(): void {
            this.recipes = this.RecipeService.getRecipes();
     }
}
