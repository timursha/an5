import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routing.module';
import { AppComponent } from './app.component';
// import { Foo2Component } from './menu/menu.component'
import { FirstModule } from './first/first.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {StoreService} from './first/services/store.service';
import {BasketService} from './first/services/basket.service';
import {ProductService} from './first/services/product.service';
import {OrderService} from './first/services/order.service';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstModule,
    HttpClientModule,
    MatCardModule,
  ],
  providers: [
    HttpClient,
    BasketService,
    StoreService,
    ProductService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
