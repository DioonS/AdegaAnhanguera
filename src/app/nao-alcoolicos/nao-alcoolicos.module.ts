import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaoAlcoolicosComponent } from './nao-alcoolicos.component';
import { NaoAlcoolicosButtonsComponent } from '../nao-alcoolicos-buttons/nao-alcoolicos-buttons.component';
import { NaoAlcoolicosRoutingModule } from './nao-alcoolicos.routing.module';



@NgModule({
  declarations: [
    NaoAlcoolicosComponent,
    NaoAlcoolicosButtonsComponent
  ],
  imports: [
    CommonModule,
    NaoAlcoolicosRoutingModule
  ]
})
export class NaoAlcoolicosModule { }
