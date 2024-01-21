import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeApiService } from '../../shared/poke-api.service';
import { PokeApiDetail } from '../../models/poke-api-detail.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss',
})
export class PokemonDetailComponent implements OnInit {

  pokemonDetails!: PokeApiDetail;

  constructor(
    private route: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    const pokemonName = this.route.snapshot.params['name'];
    this.pokeApiService
      .getPokemonDetailsByName(pokemonName)
      .subscribe((pokemonDetails: PokeApiDetail) => {
        this.pokemonDetails = pokemonDetails;
        console.log(pokemonDetails);
      });
  }
}
