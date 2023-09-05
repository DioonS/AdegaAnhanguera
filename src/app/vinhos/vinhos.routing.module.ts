import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VinhosComponent } from './vinhos.component';
import { VinhosTintoComponent } from '../vinhos-tinto/vinhos-tinto.component';
import { VinhosBrancoComponent } from '../vinhos-branco/vinhos-branco.component';
import { VinhosRoseComponent } from '../vinhos-rose/vinhos-rose.component';

const wineRoutes: Routes = [
    {
        path: '', component: VinhosComponent, children: [
            { path: 'vinhos-tinto', component: VinhosTintoComponent },
            { path: 'vinhos-branco', component: VinhosBrancoComponent },
            { path: 'vinhos-rose', component: VinhosRoseComponent },
        { path: '', redirectTo: 'vinhos-tinto', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(wineRoutes)],
    exports: [RouterModule],
})
export class VinhosRoutingModule {}