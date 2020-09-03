import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { TablaComponent } from './tabla/tabla.component';
import { PaginaNoEncontradaComponent } from './pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  {
    path: 'lista',
    component: ListaComponent
  },
  {
    path: 'tabla',
    component: TablaComponent
  },
  {
    path: '',
    redirectTo: 'tabla',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PaginaNoEncontradaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
