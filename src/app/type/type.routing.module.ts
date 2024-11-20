import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTiposComponent } from './listar-tipos/listar-tipos.component';

const routes: Routes = [
  {
    path: ':type', component: ListarTiposComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeRoutingModule { }
