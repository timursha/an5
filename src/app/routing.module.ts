import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './first/menu/menu.component';
import { PzakaziComponent } from './first/pzakazi/pzakazi.component';
import { Korzina_clientComponent } from './first/korzina_client/korzina_client.component';
import {Padminmenu} from './first/padminmenu/padminmenu.component';
import {Zakaz1Component} from './first/zakaz1/zakaz1.component';


// import { Foo4Component } from './first/foo4/foo4.component'


// import { Foo2Component } from './first/menu/menu.component'

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {path: 'menu', component: MenuComponent},

        {path: 'korzina_client', component: Korzina_clientComponent},
        {path: 'padminmenu', component: Padminmenu},
        {path: 'zakaz1', component: Zakaz1Component},
        {path: 'pzakazi', component: PzakaziComponent}




        // {path: 'foo4', component: Foo4Component}

        // {path: 'menu', component: Foo2Component}

      ]
    )
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule {

}
