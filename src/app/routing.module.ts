import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './first/components/menu/menu.component';
import { PartnerOrdersComponent } from './first/components/partnerOrders/partnerOrders.component';
import { BasketComponent } from './first/components/basket/basket.component';
import {PartnerMenuComponent} from './first/components/partnermenu/partnermenu.component';
import {OrderComponent} from './first/components/order/order.component';
import {ProductFormComponent} from './first/components/product/productForm/productForm.component';
import {ProductEditComponent} from './first/components/product/product-edit/product-edit.component';
import {ProductCreateComponent} from './first/components/product/product-create/product-create.component';
import {LoginComponent} from './first/components/login/login.component';


// import { Foo4Component } from './first/foo4/foo4.component'


// import { Foo2Component } from './first/menu/menu.component'

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {path: 'menu/:id', component: MenuComponent},

        {path: 'basket/:id', component: BasketComponent},
        {path: 'partnermenu', component: PartnerMenuComponent},
        {path: 'partnerOrders', component: PartnerOrdersComponent},
        {path: 'order/:id', component: OrderComponent},
        {path: 'product/edit/:id', component: ProductEditComponent},
        {path: 'product/create', component: ProductCreateComponent},
        {path: 'login', component: LoginComponent}







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
