import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent} from './components/menu/menu.component';
import { PartnerOrdersComponent } from './components/partnerOrders/partnerOrders.component';
import { PartnerMenuComponent } from './components/partnermenu/partnermenu.component';
import { OrderComponent } from './components/order/order.component';
import { CounterComponent } from './components/counter/counter.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {HttpClient} from '@angular/common/http';
import {BasketService} from './services/basket.service';
import {StoreService} from './services/store.service';
import {BasketComponent} from './components/basket/basket.component';
import {ProductService} from './services/product.service';
import {OrderService} from './services/order.service';
import {RouterModule} from '@angular/router';
import {ProductFormComponent} from './components/product/productForm/productForm.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';


// import { Foo4Component } from './foo4/foo4.component';


@NgModule({
  declarations: [
    MenuComponent,
    PartnerOrdersComponent,
    BasketComponent,
    PartnerMenuComponent,
    OrderComponent,
    CounterComponent,
    ProductFormComponent,
    ProductEditComponent,
    ProductCreateComponent
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatGridListModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClient,
    BasketService,
    StoreService,
    ProductService,
    OrderService
  ]
})

export class FirstModule {}
