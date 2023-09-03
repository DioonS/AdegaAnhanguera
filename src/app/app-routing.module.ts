import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoAcoolicosComponent } from './nao-acoolicos/nao-acoolicos.component';
import { DestiladosComponent } from './destilados/destilados.component';
import { VinhosComponent } from './vinhos/vinhos.component';
import { GelosComponent } from './gelos/gelos.component';
import { LatasComponent } from './latas/latas.component';
import { CervejasComponent } from './cervejas/cervejas.component';

const routes: Routes = [
  { path: 'cervejas', component: CervejasComponent, children: [
    { path: 'latas', component: LatasComponent } ]},
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
