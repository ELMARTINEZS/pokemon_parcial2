import { Component, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { PokemonService } from '../pokemon.service';
@Component({
  selector: 'app-pokemon-listar',
  templateUrl: './pokemon-listar.component.html',
  styleUrls: ['./pokemon-listar.component.css']
})
export class PokemonListarComponent implements OnInit {
  pokemons: Array<PokemonDetailDto> = [];
  pokemonDetail!: PokemonDetailDto;
  selected: boolean = false;

  constructor(private pokemonService: PokemonService) { }

  getPokemons(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }

  selectPokemon(pokemon: PokemonDetailDto): void {
    this.pokemonDetail = pokemon;
    this.selected = true;
  }
  
  ngOnInit() {
    this.getPokemons();
  }

}
