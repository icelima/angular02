import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from '../interfaces/types';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  private apiUrl = '/cocktails';

  constructor(private http: HttpClient) {}

  // Get all cocktails
  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.apiUrl);
  }

  // Get a single cocktail by ID
  getCocktailById(id: number): Observable<Cocktail> {
    return this.http.get<Cocktail>(`${this.apiUrl}/${id}`);
  }
}
