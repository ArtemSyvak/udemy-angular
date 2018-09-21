import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Tomato', 3),
    new Ingredient('Cucumber', 3),
    new Ingredient('Onion', 1),
    new Ingredient('Sausage', 3)
  ];
  constructor() { }

  ngOnInit() {
  }

}
