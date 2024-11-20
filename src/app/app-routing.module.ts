import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeRoutingModule } from './type/type-routing.module';

const routes: Routes = [
  { path: 'tipos', loadChildren: () => import('./type/type.module').then(m => TypeRoutingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
