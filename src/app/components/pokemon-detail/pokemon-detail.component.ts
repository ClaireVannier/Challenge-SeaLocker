import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from '../../shared/poke-api.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss',
})
export class PokemonDetailComponent implements OnInit {

  pokemonDetails: any;

  constructor(
    private route: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    const pokemonName = this.route.snapshot.params['name'];
    console.log(pokemonName);
    this.pokeApiService
      .getPokemonDetailsByName(pokemonName)
      .subscribe((pokemonDetails: any) => {
        this.pokemonDetails = pokemonDetails;
      });
  }
}
