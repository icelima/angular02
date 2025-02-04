import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../../shared/interfaces/types';
import { CocktailsService } from '../../shared/services/cocktails.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from "../../shared/components/search-bar/search-bar.component";
import { FavItemComponent } from "../../shared/components/fav-item/fav-item.component";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-list-cocktails',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchBarComponent, FavItemComponent, HttpClientModule],
  templateUrl: './list-cocktails.component.html',
  styleUrls: ['./list-cocktails.component.scss']
})
export class ListCocktailsComponent implements OnInit {

  items: Cocktail[] = [];
  filteredItems: Cocktail[] = [];

  constructor(
    public cocktailsService: CocktailsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.cocktailsService.getCocktails().subscribe({
      next: (cocktails: Cocktail[]) => {
        if(cocktails) {
          this.items = cocktails; //used for the search
          this.filteredItems = this.items;
        } else {
          console.error('Something wrong with the data')
        }
      },
      error: (err) => {
        console.error('Error', err);
      },
      complete: () => {}
    });
  }

  getCocktailDetails(id: number): void {
    this.cocktailsService.getCocktailById(id).subscribe({
      next: (cocktail: Cocktail) => {
        //navigate to single cocktail page and pass data using state
        this.router.navigate(['/cocktails/' + id], { state: { item: cocktail, items: this.items } });
      },
      error: (err) => {
        console.error('Error', err)
      },
      complete: () => {}
    });
  }

  filterCocktails(event: Cocktail[]){
    this.filteredItems = event;
  }

}