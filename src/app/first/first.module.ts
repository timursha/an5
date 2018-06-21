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
import {ChangeProductComponent} from './components/changeProduct/changeProduct.component';
import { FormsModule } from '@angular/forms';


// import { Foo4Component } from './foo4/foo4.component';


@NgModule({
  declarations: [
    MenuComponent,
    PartnerOrdersComponent,
    BasketComponent,
    PartnerMenuComponent,
    OrderComponent,
    CounterComponent,
    ChangeProductComponent
  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule,
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
