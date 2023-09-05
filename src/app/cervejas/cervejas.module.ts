import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CervejasComponent } from './cervejas.component';
import { CervejasRoutingModule } from './cervejas.routing.module';
import { CervejaButtonsComponent } from '../cerveja-buttons/cerveja-buttons.component';

@NgModule({
  declarations: [
    CervejasComponent,
    CervejaButtonsComponent
  ],
  imports: [
    CommonModule,
    CervejasRoutingModule
  ]
})
export class CervejasModule { }
