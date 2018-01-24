import { Injectable } from '@angular/core';
import { Recipe } from "./recipe";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

const RECIPES: Recipe[] = [
  { id: 1, title: 'recipe1', description: 'desc1', ingredients: 'ingr1', 
    imgUrl: 'http://www.mnhsz.com/storage/upload/2016/gulyas1.jpg'},
  { id: 2, title: 'recipe2', description: 'desc2', ingredients: 'ingr2', 
    imgUrl: 'http://www.mnhsz.com/storage/upload/2016/gulyas1.jpg'},
  { id: 3, title: 'recipe3', description: 'desc3', ingredients: 'ingr3', 
    imgUrl: 'http://www.mnhsz.com/storage/upload/2016/gulyas1.jpg'},
  { id: 4, title: 'recipe4', description: 'desc4', ingredients: 'ingr4', 
    imgUrl: 'http://www.mnhsz.com/storage/upload/2016/gulyas1.jpg'},
];

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

interface FeathersResponse<T> {
  total: number,
  limit: number,
  skip: number,
  data: T[]
};

@Injectable()
export class RecipeService {

  private recipeUrl = 'http://localhost:3030/recipes';

  constructor(
    private http: HttpClient
  ) { }

  getRecipes(): Promise<Recipe[]> {
    return this.http.get<FeathersResponse<Recipe>>(this.recipeUrl)
      .map(response => response.data)
      .toPromise();
  }

  getRecipe(id: number): Promise<Recipe> {
    return this.http.get<Recipe>(`${this.recipeUrl}/${id}`).toPromise();
  }

  addRecipe(recipe: Recipe): Promise<Recipe> {
    return this.http.post<Recipe>(this.recipeUrl, recipe, httpOptions)
      .toPromise();
  }

  updateRecipe(id: number, recipe: Recipe): Promise<Recipe> {
    return this.http.put<Recipe>(`${this.recipeUrl}/${id}`, recipe, httpOptions)
      .toPromise();
  }

}
