import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { ShopComponent } from './components/shop/shop.component';
import { TabakComponent } from './components/tabak/tabak.component';
import { HeaderShopComponent } from './components/header-shop/header-shop.component';
import { RouterModule } from '@angular/router';

const routes = [
  {path: '', component: LandingComponent},
  {path: 'shopCig', component: ShopComponent},
  {path: 'shopTabak', component: TabakComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LandingComponent,
    ShopComponent,
    TabakComponent,
    HeaderShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
