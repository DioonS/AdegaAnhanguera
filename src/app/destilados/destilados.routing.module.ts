import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DestiladosComponent } from './destilados.component';
import { CachacaComponent } from '../cachaca/cachaca.component';
import { WhiskyComponent } from '../whisky/whisky.component';
import { VodkaComponent } from '../vodka/vodka.component';

const distillatesRoutes: Routes = [
    {
        path: '', component: DestiladosComponent, children: [
            { path: 'cachaca', component: CachacaComponent },
            { path: 'whisky', component: WhiskyComponent },
            { path: 'vodka', component: VodkaComponent },
        { path: '', redirectTo: 'cachaca', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(distillatesRoutes)],
    exports: [RouterModule],
})
export class DestiladosRoutingModule {}