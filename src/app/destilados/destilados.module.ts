import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestiladosComponent } from './destilados.component';
import { DestiladosButtonsComponent } from '../destilados-buttons/destilados-buttons.component';
import { DestiladosRoutingModule } from './destilados.routing.module';

@NgModule({
  declarations: [
    DestiladosComponent,
    DestiladosButtonsComponent
  ],
  imports: [
    CommonModule,
    DestiladosRoutingModule
  ]
})
export class DestiladosModule { }
