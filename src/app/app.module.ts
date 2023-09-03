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
import { LatasComponent } from './latas/latas.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

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
    LatasComponent,
    PageNotFoundComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    FormsModule,
    RouterModule,
    NgxSpinnerModule,
    InfiniteScrollModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
