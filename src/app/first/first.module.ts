import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent} from './menu/menu.component';
import { PzakaziComponent } from './pzakazi/pzakazi.component';
import { Korzina_clientComponent } from './korzina_client/korzina_client.component';
import { Padminmenu } from './padminmenu/padminmenu.component';
import { Zakaz1Component } from './zakaz1/zakaz1.component';
import { CounterComponent } from './counter/counter.component';



import {MatGridListModule} from '@angular/material/grid-list';

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
    MatGridListModule
  ]
})

export class FirstModule {}
