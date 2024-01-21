import { Component } from '@angular/core';
import { PokeApiResult } from '../../models/poke-api-result.model';
import { PokeApiService } from '../../shared/poke-api.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrl: './pokemon-search.component.scss',
})
export class PokemonSearchComponent {
  
  searchedPokemon: string = '';
  foundPokemon!: PokeApiResult | undefined;
  isSearchToggled: boolean = false;

  constructor(private pokeApiService: PokeApiService) {}

  search(): void {
    this.isSearchToggled = true;
    this.foundPokemon = this.pokeApiService.pokemons.find(
      (pokemon: PokeApiResult) =>
        pokemon.name === this.searchedPokemon.toLowerCase()
    );
  }
}
