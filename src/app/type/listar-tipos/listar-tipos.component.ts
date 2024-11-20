import { Component, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../../pokemon/pokemonDetailDto';
import { PokemonService } from '../../pokemon/pokemon.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-listar-tipos',
  templateUrl: './listar-tipos.component.html',
  styleUrls: ['./listar-tipos.component.css']
})
export class ListarTiposComponent implements OnInit {
  tipo!: string;
  pokemons: Array<PokemonDetailDto> = [];
  listaPokemon: Array<PokemonDetailDto> = [];
  constructor( private pokemonService : PokemonService, private route: ActivatedRoute ) { }

  filtrarPorTipo(): void {
    if (this.tipo == undefined){
      this.tipo = this.route.snapshot.params['tipo'];
    }
    this.listaPokemon =this.pokemons = this.pokemonService.getPokemons();
    this.pokemons = this.pokemons.filter(pokemon => {
      return pokemon.types.some(type => type.type.name == this.tipo);
    });
  }

  ngOnInit() {
    this.filtrarPorTipo();
  }

}
