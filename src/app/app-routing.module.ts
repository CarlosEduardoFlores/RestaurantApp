import {Routes, RouterModule} from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule, Component } from '@angular/core';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
const routes: Routes=[
    {
        path:'', redirectTo:'/recipes', pathMatch:'full'
    },
    {
        path: 'recipes', component:RecipesComponent,children:[
             {path:'', component: RecipeStartComponent},
            { path:':id', component: RecipesDetailComponent}
            ]
    },
    {
        path: 'shoppinglist', component:ShoppingListComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}