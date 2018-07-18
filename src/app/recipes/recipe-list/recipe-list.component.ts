import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeItemEmitter = new EventEmitter();
  recipes : Recipe[] = [
    new Recipe('Amit','Singh','http://www.trandynow.com/wp-content/uploads/2018/04/recipe.jpg'),
    new Recipe('Sweta','Gupta','http://www.trandynow.com/wp-content/uploads/2018/04/recipe.jpg' ),
    new Recipe('Ami','Sin','http://www.trandynow.com/wp-content/uploads/2018/04/recipe.jpg' )


  ];

  constructor() { }

  ngOnInit() {
  }
  
  recipeitemDetails(item) {
    this.recipeItemEmitter.emit(item);
  }

}
