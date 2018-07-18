import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameRef :ElementRef;
  @ViewChild('amountInput') amountRef :ElementRef;
  @Output() IngredientAdded = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addItem() {
    const newName = this.nameRef.nativeElement.value;
    const newAmount = this.amountRef.nativeElement.value;
    const newIngredient = new Ingredient(newName,newAmount);
    debugger;

    this.IngredientAdded.emit(newIngredient);
  }
}
