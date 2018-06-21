import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './first/components/menu/menu.component';
import { PartnerOrdersComponent } from './first/components/partnerOrders/partnerOrders.component';
import { BasketComponent } from './first/components/basket/basket.component';
import {PartnerMenuComponent} from './first/components/partnermenu/partnermenu.component';
import {OrderComponent} from './first/components/order/order.component';
import {ChangeProductComponent} from './first/components/changeProduct/changeProduct.component';


// import { Foo4Component } from './first/foo4/foo4.component'


// import { Foo2Component } from './first/menu/menu.component'

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {path: 'menu/:id', component: MenuComponent},

        {path: 'basket/:id', component: BasketComponent},
        {path: 'partnermenu', component: PartnerMenuComponent},
        {path: 'order/:id', component: OrderComponent},
        {path: 'partnerOrders', component: PartnerOrdersComponent},
        {path: 'changeProduct/:id', component: ChangeProductComponent}





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
