import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CervejasComponent } from './cervejas.component';
import { CervejasRoutingModule } from './cervejas.routing.module';

@NgModule({
  declarations: [
    CervejasComponent
  ],
  imports: [
    CommonModule,
    CervejasRoutingModule
  ]
})
export class CervejasModule { }
