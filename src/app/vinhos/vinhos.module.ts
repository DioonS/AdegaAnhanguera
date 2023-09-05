import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VinhosComponent } from './vinhos.component';
import { VinhosButtonsComponent } from '../vinhos-buttons/vinhos-buttons.component';
import { VinhosRoutingModule } from './vinhos.routing.module';

@NgModule({
  declarations: [
    VinhosComponent,
    VinhosButtonsComponent
  ],
  imports: [
    CommonModule,
    VinhosRoutingModule
  ]
})
export class VinhosModule { }
