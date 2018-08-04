import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { BasketComponent } from './components/basket/basket.component';
import {OrderComponent} from './partner/components/order/order.component';
import {ProductEditComponent} from './components/product/product-edit/product-edit.component';
import {ProductCreateComponent} from './components/product/product-create/product-create.component';
import {LoginComponent} from './components/login/login.component';
import {ConfirmationComponent} from './components/confirmation/confirmation.component';
import {PaymentComponent} from './components/payment/payment.component';
import {MapComponent} from './components/map/map.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {partnerRouters} from './partner/partner.routing';
import {AdminLayoutComponent} from './partner/layout/admin-layout/admin-layout.component';



// import { Foo4Component } from './foo4/foo4.component'


// import { Foo2Component } from './menu/menu.component'

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {path: 'menu/:id', component: MenuComponent},

        {path: 'basket/:id', component: BasketComponent},
        {path: 'product/edit/:id', component: ProductEditComponent},
        {path: 'product/create', component: ProductCreateComponent},
        {path: 'login', component: LoginComponent},
        {path: 'payment/:id', component: PaymentComponent},
        {path: 'map', component: MapComponent},
        {path: 'navigation/:id', component: NavigationComponent},

        {path: 'confirmation/:id', component: ConfirmationComponent},

        {path: 'partner', component: AdminLayoutComponent, children: partnerRouters}





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
