import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cocktail } from '../../shared/interfaces/types';
import { FavItemComponent } from "../../shared/components/fav-item/fav-item.component";

@Component({
  selector: 'app-cocktail',
  standalone: true,
  imports: [CommonModule, FavItemComponent],
  templateUrl: './cocktail.component.html',
  styleUrl: './cocktail.component.scss'
})
export class CocktailComponent implements OnInit{
  item: Cocktail;
  items: Cocktail[] = [];

  constructor(
    public router: Router,
  ){
    //get data from list cocktail component
    this.item = this.router.getCurrentNavigation()?.extras.state?.['item'];
    this.items = this.router.getCurrentNavigation()?.extras.state?.['items'];
  }

  ngOnInit(): void {
    //set favourite of single cocktail
    //check if items is an array
    if (Array.isArray(this.items)) {
      //control the object with same id so i can set isFavourite
      const cocktail = this.items.find(c => c.id === this.item.id);
      if (cocktail) {
        this.item.isFavourite = cocktail.isFavourite;
      } else {
        console.warn('Cocktail not found!');
      }
    } else {
      //initialize object if the service do not return any data
      this.item = {
        id : 0,
        name : '',
        imageUrl : '',
        isAlcoholic : false,
        isFavourite : false,
        instructions : '',
        ingredients : [],
      }
      console.error('Something wrong with the data');
    }
    
    //control if item is not null
    if(!this.item) {
      console.error('Something wrong with the data')
    }
  }

  //navigate to cocktails list page
  backHome(){
    this.router.navigate(['/cocktails']);
  }

}
