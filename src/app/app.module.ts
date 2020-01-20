import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CadastroImobiliariaComponent } from './cadastro-imobiliaria/cadastro-imobiliaria.component';
import { PromoViewComponent } from './promo-view/promo-view.component';
import { CardsComponent } from './cards/cards.component';
import { CardsStyle2Directive } from './cards/styles/cards-style2.directive';
import { JoinUsComponent } from './join-us/join-us.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CadastroImobiliariaComponent,
    PromoViewComponent,
    CardsComponent,
    CardsStyle2Directive,
    JoinUsComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
