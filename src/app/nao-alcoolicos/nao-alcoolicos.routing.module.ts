import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NaoAlcoolicosComponent } from './nao-alcoolicos.component';
import { RefrigerantesComponent } from '../refrigerantes/refrigerantes.component';
import { SucosComponent } from '../sucos/sucos.component';
import { AguaComponent } from '../agua/agua.component';
import { EnergeticosComponent } from '../energeticos/energeticos.component';

const nonAlcoholicRoutes: Routes = [
    {
        path: '', component: NaoAlcoolicosComponent, children: [
            { path: 'refrigerantes', component: RefrigerantesComponent },
            { path: 'sucos', component: SucosComponent },
            { path: 'agua', component: AguaComponent },
            { path: 'energeticos', component: EnergeticosComponent },
        { path: '', redirectTo: 'refrigerantes', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(nonAlcoholicRoutes)],
    exports: [RouterModule],
})
export class NaoAlcoolicosRoutingModule {}