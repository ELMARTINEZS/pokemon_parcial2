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
  tipos: Array<[string,number]> = [];

  constructor(private pokemonService: PokemonService) { }

  getPokemons(): void {
    this.pokemons = this.pokemonService.getPokemons();
    this.contarTipos();
  }

  selectPokemon(pokemon: PokemonDetailDto): void {
    this.pokemonDetail = pokemon;
    this.selected = true;
  }
  
  contarTipos(): void {
    this.pokemons.forEach(pokemon => {
      pokemon.types.forEach(type => {
        let index = this.tipos.findIndex(tipo => tipo[0] == type.type.name);
        if (index != -1) {
          this.tipos[index][1]++;
        } else {
          this.tipos.push([type.type.name, 1]);
        }
      });
    });
  }


  ngOnInit() {
    this.getPokemons();
  }

}
