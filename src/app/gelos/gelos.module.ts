import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GelosComponent } from './gelos.component';
import { GelosButtonsComponent } from '../gelos-buttons/gelos-buttons.component';
import { GelosRoutingModule } from './gelos.routing.module';

@NgModule({
  declarations: [
    GelosComponent,
    GelosButtonsComponent
  ],
  imports: [
    CommonModule,
    GelosRoutingModule
  ]
})
export class GelosModule { }
