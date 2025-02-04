import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from '../../interfaces/types';

@Component({
  selector: 'app-fav-item',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './fav-item.component.html',
  styleUrl: './fav-item.component.scss'
})
export class FavItemComponent implements OnInit {
  @Input() cocktail: Cocktail;
  @Input() items: Cocktail[];

  ngOnInit(): void {
    this.getDataToSave();
  }

  getDataToSave() {
    if(this.items) {
      this.items.forEach(cocktail => {
        if(cocktail.id) {
          const favouriteCocktails = localStorage.getItem(`cocktail_${cocktail.id}`);
          if (favouriteCocktails !== null) {
            cocktail.isFavourite = JSON.parse(favouriteCocktails);
          }
        } else {
          console.error('Something wrong with the data');
        }
      });
    } else {
      //initialize object if the service do not return any data
      this.cocktail = {
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
  }

  setFav(cocktail: Cocktail){
    cocktail.isFavourite = !cocktail.isFavourite;
    if(cocktail.id) {
      if (cocktail.isFavourite) {
        localStorage.setItem(`cocktail_${cocktail.id}`, JSON.stringify(cocktail.isFavourite));
      } else {
        localStorage.removeItem(`cocktail_${cocktail.id}`);
      }
    } else {
      console.error('Something wrong with the data');
    }
  }

}
