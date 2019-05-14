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
import {ProviderService} from './shared/services/provider.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

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
    HeaderShopComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
