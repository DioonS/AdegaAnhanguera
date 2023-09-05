import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoAlcoolicosComponent } from './nao-alcoolicos/nao-alcoolicos.component';
import { DestiladosComponent } from './destilados/destilados.component';
import { VinhosComponent } from './vinhos/vinhos.component';
import { GelosComponent } from './gelos/gelos.component';
import { CervejasComponent } from './cervejas/cervejas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'cervejas', component: CervejasComponent },
  { path: 'nao-alcoolicos', component: NaoAlcoolicosComponent },
  { path: 'destilados', component: DestiladosComponent },
  { path: 'vinhos', component: VinhosComponent },
  { path: 'gelos', component: GelosComponent },
  { path: '', redirectTo: '/cervejas', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
