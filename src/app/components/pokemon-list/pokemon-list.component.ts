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
  currentPagePokemons: PokeApiResult[] = [];
  pages = new Array(10);

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService
      .getFirst100Pokemons()
      .subscribe((response: PokeApiResponse) => {
        this.pokemons = response.results;
        this.changePagination(1);
      });
  }

  changePagination(currentPage: number): void {
    const itemsPerPage = 10;
    const startIndex = (currentPage - 1) * itemsPerPage;
    this.currentPagePokemons = this.pokemons.slice(
      startIndex,
      startIndex + itemsPerPage
    );
  }
}
