import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CardsComponent } from './cards/cards.component';
import { CervejasUnitarioComponent } from './cervejas-unitario/cervejas-unitario.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryButtonsComponent } from './category-buttons/category-buttons.component';
import { NaoAcoolicosComponent } from './nao-acoolicos/nao-acoolicos.component';
import { FooterComponent } from './footer/footer.component';
import { GelosComponent } from './gelos/gelos.component';
import { VinhosComponent } from './vinhos/vinhos.component';
import { DestiladosComponent } from './destilados/destilados.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CervejasUnitarioComponent,
    NavbarComponent,
    CategoryButtonsComponent,
    NaoAcoolicosComponent,
    FooterComponent,
    GelosComponent,
    VinhosComponent,
    DestiladosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
