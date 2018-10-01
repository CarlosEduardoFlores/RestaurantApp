import {Recipe} from '../recipes/recipe.model'
export class RecipeServices{
   
    recipes: Recipe[] = [
        new Recipe('Atest recipe 1','This is a simply test 1','https://dietas.elembarazo.net/wp-content/uploads/sites/6/2012/08/Manzana-embarazo.jpg'),
        new Recipe('Atest recipe 2','This is a simply test 2','https://dietas.elembarazo.net/wp-content/uploads/sites/6/2012/08/Manzana-embarazo.jpg'),
        new Recipe('Atest recipe 3','This is a simply test 3','https://dietas.elembarazo.net/wp-content/uploads/sites/6/2012/08/Manzana-embarazo.jpg')
      ]
      getRecipes(){
          return this.recipes.slice();
      }
}