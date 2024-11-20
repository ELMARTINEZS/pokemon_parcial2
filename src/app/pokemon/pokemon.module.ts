import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListarComponent } from './pokemon-listar/pokemon-listar.component';
import { PokemonDetalleComponent } from './pokemon-detalle/pokemon-detalle.component';
import { ListarTiposComponent } from '../type/listar-tipos/listar-tipos.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [PokemonListarComponent, PokemonDetalleComponent, ListarTiposComponent],
  exports: [PokemonListarComponent, PokemonDetalleComponent, ListarTiposComponent]
})
export class PokemonModule { }
