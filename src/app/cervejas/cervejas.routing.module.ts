import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CervejasComponent } from './cervejas.component';
import { LatasComponent } from '../latas/latas.component';
import { NaoAcoolicosComponent } from '../nao-acoolicos/nao-acoolicos.component';
import { DestiladosComponent } from '../destilados/destilados.component';
import { VinhosComponent } from '../vinhos/vinhos.component';
import { GelosComponent } from '../gelos/gelos.component';

const beerRoutes: Routes = [
    {
        path: '', component: CervejasComponent, children: [
        { path: 'latas', component: LatasComponent },
        { path: 'nao-alcoolicos', component: NaoAcoolicosComponent },
        { path: 'destilados', component: DestiladosComponent },
        { path: 'vinhos', component: VinhosComponent },
        { path: 'gelos', component: GelosComponent },
        { path: '', redirectTo: 'latas', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(beerRoutes)],
    exports: [RouterModule],
})
export class CervejasRoutingModule {}