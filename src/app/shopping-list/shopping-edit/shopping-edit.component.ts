import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IngredientsService } from '../../services/ingredients.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef :ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;
  constructor( private ingredientsService:IngredientsService) {
    
   }

  ngOnInit() {
  }

  onAddItem(){
    var name= this.nameInputRef.nativeElement.value;
    var amount =this.amountInputRef.nativeElement.value;
    var newingredient= new Ingredient(name, amount);
    this.ingredientsService.addIngredient(newingredient);
  }
}
