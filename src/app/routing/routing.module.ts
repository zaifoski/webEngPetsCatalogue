import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeListComponent } from "../recipe-list/recipe-list.component";
import { RecipeFormComponent } from '../recipe-form/recipe-form.component';
import { RecipeDetailComponent } from '../recipe-detail/recipe-detail.component';
import { AboutComponent } from '../about/about.component';
import { PetsComponent } from "../pets/pets.component";
import { HomeComponent } from "../home/home.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'pets',
    component: PetsComponent
  },
  {
    path: 'recipes/new',
    component: RecipeFormComponent
  },
  {
    path: 'recipes/:id',
    component: RecipeDetailComponent
  },
  {
    path: 'recipes/:id/edit',
    component: RecipeFormComponent
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }