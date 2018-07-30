import { NgModule } from '@angular/core';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent} from './components/menu/menu.component';
import { PartnerOrdersComponent } from './components/partnerOrders/partnerOrders.component';
import { PartnerMenuComponent } from './components/partnermenu/partnermenu.component';
import { OrderComponent } from './components/order/order.component';
import { CounterComponent } from './components/counter/counter.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {BasketService} from './services/basket.service';
import {StoreService} from './services/store.service';
import {BasketComponent} from './components/basket/basket.component';
import {ProductService} from './services/product.service';
import {OrderService} from './services/order.service';
import {RouterModule} from '@angular/router';
import {ProductFormComponent} from './components/product/productForm/productForm.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductEditComponent} from './components/product/product-edit/product-edit.component';
import {ProductCreateComponent} from './components/product/product-create/product-create.component';
import {TokenInterceptor} from './services/auth/auth.request';
import {ErrorInterceptor} from './services/auth/error.request';
import {AuthService} from './services/auth/auth.service';
import {LoginComponent} from './components/login/login.component';
import {PartnerAdminComponent} from './components/partnerAdmin/partnerAdmin.component';
import {ConfirmationComponent} from './components/confirmation/confirmation.component';
import {MatCardModule} from '@angular/material/card';
import { PaymentComponent } from './components/payment/payment.component';
import { MapComponent } from './components/map/map.component';
import { NavigationComponent } from './components/navigation/navigation.component';


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
    ProductCreateComponent,
    LoginComponent,
    PartnerAdminComponent,
    ConfirmationComponent,
    PaymentComponent,
    MapComponent,
    NavigationComponent,




  ],
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatGridListModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule



  ],
  providers: [
    HttpClient,
    BasketService,
    StoreService,
    ProductService,
    OrderService,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ]
})

export class FirstModule {}

