import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe";
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe = new Recipe();

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  async ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recipe = await this.recipeService.getRecipe(id);
  }

}
