import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { PokeApiResponse } from '../models/poke-api-response.model';
import { PokeApiDetail } from '../models/poke-api-detail.model';
import { PokeApiResult } from '../models/poke-api-result.model';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/';
  pokemons: PokeApiResult[] = [];

  constructor(private http: HttpClient) {}

  getFirst100Pokemons(): Observable<PokeApiResponse> {
    return this.http
      .get<PokeApiResponse>(`${this.baseUrl}pokemon?limit=100&offset=0`)
      .pipe(
        tap((response: PokeApiResponse) => {
          this.pokemons = response.results;
        })
      );
  }
  getPokemonDetailsByName(name: string): Observable<PokeApiDetail> {
    return this.http.get<any>(`${this.baseUrl}pokemon/${name}`);
  }
}
