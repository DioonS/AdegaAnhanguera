import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CervejasComponent } from './cervejas.component';
import { LatasComponent } from '../latas/latas.component';
import { LongNeckComponent } from '../long-neck/long-neck.component';
import { RetornaveisComponent } from '../retornaveis/retornaveis.component';
import { GarrafasComponent } from '../garrafas/garrafas.component';
import { PacksComponent } from '../packs/packs.component';

const beerRoutes: Routes = [
    {
        path: '', component: CervejasComponent, children: [
            { path: 'latas', component: LatasComponent },
            { path: 'long-neck', component: LongNeckComponent },
            { path: 'packs', component: PacksComponent },
            { path: 'retornaveis', component: RetornaveisComponent },
            { path: 'garrafas', component: GarrafasComponent },
        { path: '', redirectTo: 'latas', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(beerRoutes)],
    exports: [RouterModule],
})
export class CervejasRoutingModule {}