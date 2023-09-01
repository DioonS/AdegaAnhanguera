import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CervejasUnitarioComponent } from './cervejas-unitario/cervejas-unitario.component';
import { NaoAcoolicosComponent } from './nao-acoolicos/nao-acoolicos.component';
import { DestiladosComponent } from './destilados/destilados.component';
import { VinhosComponent } from './vinhos/vinhos.component';
import { GelosComponent } from './gelos/gelos.component';

const routes: Routes = [
  { path: 'cervejas', component: CervejasUnitarioComponent},
  { path: 'nao-alcoolicos', component: NaoAcoolicosComponent},
  { path: 'destilados', component: DestiladosComponent},
  { path: 'vinhos', component: VinhosComponent},
  { path: 'gelos', component: GelosComponent},
  { path: '', redirectTo: '/cervejas', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
