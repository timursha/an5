import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent} from './components/menu/menu.component';
import { PzakaziComponent } from './components/pzakazi/pzakazi.component';
import { Korzina_clientComponent } from './components/korzina_client/korzina_client.component';
import { Padminmenu } from './components/padminmenu/padminmenu.component';
import { Zakaz1Component } from './components/zakaz1/zakaz1.component';
import { CounterComponent } from './components/counter/counter.component';



import {MatGridListModule} from '@angular/material/grid-list';
import {HttpClient} from "@angular/common/http";
import {BasketService} from "./services/basket.service";
import {StoreService} from "./services/store.service";

// import { Foo4Component } from './foo4/foo4.component';


@NgModule({
  declarations:[
    MenuComponent,
    PzakaziComponent,
    Korzina_clientComponent,
    Padminmenu,
    Zakaz1Component,
    CounterComponent,

    // Foo4Component
  ],
  imports:[
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatGridListModule,
  ],
  providers: [
    HttpClient,
    BasketService,
    StoreService
  ]
})

export class FirstModule {}
