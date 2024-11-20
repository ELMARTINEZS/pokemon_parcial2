import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';
import { PokemonService } from '../pokemon.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pokemon-detalle',
  templateUrl: './pokemon-detalle.component.html',
  styleUrls: ['./pokemon-detalle.component.css']
})
export class PokemonDetalleComponent implements OnInit {

  pokemonId!: string;
  @Input() pokemonDetail!: PokemonDetailDto;
  selected: boolean = false;

  constructor(private pokemonService : PokemonService) { }

  getPokemon(): void {
    this.pokemonService.getPokemon(this.pokemonId).subscribe((pokemon) => {
      this.pokemonDetail = pokemon;
    });
  }

  selectPokemon(pokemon: PokemonDetailDto): void {
    this.pokemonDetail = pokemon;
    this.selected = true;
  }


  ngOnInit() {
  }

}
