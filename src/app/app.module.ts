import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CadastroImobiliariaComponent } from './cadastro-imobiliaria/cadastro-imobiliaria.component';
import { PromoViewComponent } from './promo-view/promo-view.component';
import { CardsComponent } from './cards/cards.component';
import { MenuResponsivoDirective } from './header/menu-responsivo/menu-responsivo.directive';
import { JoinUsComponent } from './join-us/join-us.component';
import { BannerComponent } from './banner/banner.component';
import { SliderOptionsComponent } from './slider-options/slider-options.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CadastroImobiliariaComponent,
    PromoViewComponent,
    CardsComponent,
    MenuResponsivoDirective,
    JoinUsComponent,
    BannerComponent,
    SliderOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
