import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cocktail } from '../../interfaces/types';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {

  searchCocktail: string = '';
  @Input() items: Cocktail[];
  @Output() filteredItems: EventEmitter<Cocktail[]> = new EventEmitter<Cocktail[]>();

  searchCocktails(): void {
    //filtra per nome del cocktail e passa il nuovo valore al componente lsta cocktail
    this.filteredItems.emit(this.items.filter(item =>
      item.name.toLowerCase().includes(this.searchCocktail.toLowerCase())
    ));
  }

}
