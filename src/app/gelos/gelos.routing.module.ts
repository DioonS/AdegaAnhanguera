import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GelosComponent } from './gelos.component';
import { GeloComponent } from '../gelo/gelo.component';
import { GeloDeCocoComponent } from '../gelo-de-coco/gelo-de-coco.component';

const icesRoutes: Routes = [
    {
        path: '', component: GelosComponent, children: [
            { path: 'gelo', component: GeloComponent },
            { path: 'gelo-de-coco', component: GeloDeCocoComponent },
        { path: '', redirectTo: 'gelo', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(icesRoutes)],
    exports: [RouterModule],
})
export class GelosRoutingModule {}