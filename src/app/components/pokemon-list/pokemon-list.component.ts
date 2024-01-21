import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../shared/poke-api.service';
import { PokeApiResponse } from '../../models/poke-api-response.model';
import { PokeApiResult } from '../../models/poke-api-result.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss',
})
export class PokemonListComponent implements OnInit {
  pokemons: PokeApiResult[] = [];

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit() {
    this.pokeApiService
      .getFirst100Pokemons()
      .subscribe((response: PokeApiResponse) => {
        this.pokemons = response.results;
      });
  }
}
