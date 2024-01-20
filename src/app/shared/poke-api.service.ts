import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeApiResponse } from '../models/poke-api-response.model';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) {}

  getFirst100Pokemons(): Observable<PokeApiResponse> {
    return this.http.get<PokeApiResponse>(
      `${this.baseUrl}pokemon?limit=100&offset=0`
    );
  }

  getPokemonDetailsByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}pokemon/${name}`);
  }
}
