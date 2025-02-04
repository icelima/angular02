import { Routes } from '@angular/router';
import { ListCocktailsComponent } from './components/list-cocktails/list-cocktails.component';
import { CocktailComponent } from './components/cocktail/cocktail.component';

export const routes: Routes = [
    {
        path: '',
        children: [
        { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
        { path: 'cocktails', component: ListCocktailsComponent },
        { path: 'cocktails/:id', component: CocktailComponent }
        ]
    }
];
