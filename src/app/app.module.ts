import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routing.module';
import { AppComponent } from './app.component';
// import { Foo2Component } from './menu/menu.component'
import { FirstModule } from './first/first.module';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {StoreService} from "./first/services/store.service";
import {BasketService} from "./first/services/basket.service";


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    BasketService,
    StoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
