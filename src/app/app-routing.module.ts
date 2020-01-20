import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PromoViewComponent } from './promo-view/promo-view.component';
import { CardsComponent } from './cards/cards.component';
import { BannerComponent } from './banner/banner.component';



const routes: Routes = [
  {
    component: MainComponent,
    path: '',
  },
  {
    component: BannerComponent,
    path: 'teste',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
