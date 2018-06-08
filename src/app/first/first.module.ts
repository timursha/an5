import { NgModule } from '@angular/core';
import { FooComponent } from './foo/foo.component';
import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent} from './menu/menu.component';
import { Foo3Component } from './foo3/foo3.component';
import { PzakaziComponent } from './pzakazi/pzakazi.component';
import { Korzina_clientComponent } from './korzina_client/korzina_client.component';
import { Padminmenu } from './padminmenu/padminmenu.component';
import { Zakaz1Component } from './zakaz1/zakaz1.component';
import { Foo4Component } from './foo4/foo4.component';
import { CounterComponent } from './counter/counter.component';



import {MatGridListModule} from '@angular/material/grid-list';

// import { Foo4Component } from './foo4/foo4.component';


@NgModule({
  declarations:[
    FooComponent,
    MenuComponent,
    Foo3Component,
    PzakaziComponent,
    Korzina_clientComponent,
    Padminmenu,
    Zakaz1Component,
    Foo4Component,
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
