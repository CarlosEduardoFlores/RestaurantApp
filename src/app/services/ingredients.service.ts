import {Ingredient} from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class IngredientsService{
    ingrdientsChanged = new EventEmitter<Ingredient[]>();
   
     ingredients: Ingredient[] = [       
    new Ingredient('Tomatoes',5),
    new Ingredient('Apples',3)
     ];
     
    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingrdientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(auxIngredients:Ingredient[]){
        for(const i of auxIngredients){
            
            var ing = this.ingredients.find(Ingredient => Ingredient.name === i.name); 
            
                if (ing !== undefined){
                    ing.amount = i.amount+ ing.amount;
                    //console.table(this.ingredients)
                }else{
                    this.ingredients.push(i);
                console.table(this.ingredients)
                }
              }
              
             
        this.ingrdientsChanged.emit(this.ingredients.slice());
        console.table(this.ingredients);
    }
    
}