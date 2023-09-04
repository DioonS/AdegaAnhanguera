import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoAcoolicosComponent } from './nao-acoolicos/nao-acoolicos.component';
import { DestiladosComponent } from './destilados/destilados.component';
import { VinhosComponent } from './vinhos/vinhos.component';
import { GelosComponent } from './gelos/gelos.component';
import { CervejasComponent } from './cervejas/cervejas.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'cervejas', component: CervejasComponent, // children : [
    //{ path 'latas', component: LatasComponent },
    //{ path 'long-neck', component: LongNeckComponent },
    //{ path 'packs', component: PacksComponent },
    //{ path 'retornaveis', component: RetornaveisComponent },
    //{ path 'garrafas', component: GarrafasComponent }
  //] 
},
  { path: 'nao-alcoolicos', component: NaoAcoolicosComponent},
  { path: 'destilados', component: DestiladosComponent},
  { path: 'vinhos', component: VinhosComponent},
  { path: 'gelos', component: GelosComponent},
  { path: '', redirectTo: '/cervejas', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
