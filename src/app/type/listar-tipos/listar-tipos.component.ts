import { Component, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../../pokemon/pokemonDetailDto';

@Component({
  selector: 'app-listar-tipos',
  templateUrl: './listar-tipos.component.html',
  styleUrls: ['./listar-tipos.component.css']
})
export class ListarTiposComponent implements OnInit {
  tipo!: string;
  pokemons: Array<PokemonDetailDto> = [];
  constructor(private listaPokemon: Array<PokemonDetailDto> ) { }

  filtrarPorTipo(): void {
    this.pokemons = this.listaPokemon.filter(pokemon => {
      return pokemon.types.some(type => type.type.name == this.tipo);
    });
  }

  ngOnInit() {
    this.filtrarPorTipo();
  }

}
