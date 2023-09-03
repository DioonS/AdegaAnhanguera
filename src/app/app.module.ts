import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CardsComponent } from './cards/cards.component';
import { CervejasUnitarioComponent } from './cervejas-unitario/cervejas-unitario.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NaoAcoolicosComponent } from './nao-acoolicos/nao-acoolicos.component';
import { FooterComponent } from './footer/footer.component';
import { GelosComponent } from './gelos/gelos.component';
import { VinhosComponent } from './vinhos/vinhos.component';
import { DestiladosComponent } from './destilados/destilados.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CervejaButtonsComponent } from './cerveja-buttons/cerveja-buttons.component';
import { LatasComponent } from './latas/latas.component';
import { CervejasComponent } from './cervejas/cervejas.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CervejasUnitarioComponent,
    TopbarComponent,
    NaoAcoolicosComponent,
    FooterComponent,
    GelosComponent,
    VinhosComponent,
    DestiladosComponent,
    NavbarComponent,
    CervejaButtonsComponent,
    LatasComponent,
    CervejasComponent
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
