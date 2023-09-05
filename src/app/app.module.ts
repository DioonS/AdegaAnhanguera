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
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LatasComponent } from './latas/latas.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { LongNeckComponent } from './long-neck/long-neck.component';
import { PacksComponent } from './packs/packs.component';
import { GarrafasComponent } from './garrafas/garrafas.component';
import { RetornaveisComponent } from './retornaveis/retornaveis.component';
import { CervejasModule } from './cervejas/cervejas.module';
import { GeloComponent } from './gelo/gelo.component';
import { GeloDeCocoComponent } from './gelo-de-coco/gelo-de-coco.component';
import { GelosModule } from './gelos/gelos.module';
import { RefrigerantesComponent } from './refrigerantes/refrigerantes.component';
import { SucosComponent } from './sucos/sucos.component';
import { AguaComponent } from './agua/agua.component';
import { EnergeticosComponent } from './energeticos/energeticos.component';
import { NaoAlcoolicosModule } from './nao-alcoolicos/nao-alcoolicos.module';
import { VinhosTintoComponent } from './vinhos-tinto/vinhos-tinto.component';
import { VinhosBrancoComponent } from './vinhos-branco/vinhos-branco.component';
import { VinhosRoseComponent } from './vinhos-rose/vinhos-rose.component';
import { VinhosModule } from './vinhos/vinhos.module';
import { CachacaComponent } from './cachaca/cachaca.component';
import { WhiskyComponent } from './whisky/whisky.component';
import { VodkaComponent } from './vodka/vodka.component';
import { DestiladosModule } from './destilados/destilados.module';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CervejasUnitarioComponent,
    TopbarComponent,
    FooterComponent,
    NavbarComponent,
    LatasComponent,
    PageNotFoundComponent,
    LongNeckComponent,
    PacksComponent,
    GarrafasComponent,
    RetornaveisComponent,
    GeloComponent,
    GeloDeCocoComponent,
    RefrigerantesComponent,
    SucosComponent,
    AguaComponent,
    EnergeticosComponent,
    VinhosTintoComponent,
    VinhosBrancoComponent,
    VinhosRoseComponent,
    CachacaComponent,
    WhiskyComponent,
    VodkaComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    FormsModule,
    RouterModule,
    NgxSpinnerModule,
    InfiniteScrollModule,
    CervejasModule,
    GelosModule,
    NaoAlcoolicosModule,
    VinhosModule,
    DestiladosModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
