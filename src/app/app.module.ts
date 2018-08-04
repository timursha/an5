import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {StoreService} from './services/store.service';
import {BasketService} from './services/basket.service';
import {ProductService} from './services/product.service';
import {OrderService} from './services/order.service';
import {MatCardModule} from '@angular/material/card';
import {MenuComponent} from './components/menu/menu.component';
import {PartnerOrdersComponent} from './partner/components/partnerOrders/partnerOrders.component';
import {BasketComponent} from './components/basket/basket.component';
import {PartnerMenuComponent} from './partner/components/partnermenu/partnermenu.component';
import {OrderComponent} from './partner/components/order/order.component';
import {ProductFormComponent} from './components/product/productForm/productForm.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MapComponent} from './components/map/map.component';
import {PaymentComponent} from './components/payment/payment.component';
import {ConfirmationComponent} from './components/confirmation/confirmation.component';
import {PartnerAdminComponent} from './partner/components/partnerAdmin/partnerAdmin.component';
import {LoginComponent} from './components/login/login.component';
import {ProductCreateComponent} from './components/product/product-create/product-create.component';
import {ProductEditComponent} from './components/product/product-edit/product-edit.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthService} from './services/auth/auth.service';
import {TokenInterceptor} from './services/auth/auth.request';
import {ErrorInterceptor} from './services/auth/error.request';
import {AdminLayoutComponent} from './partner/layout/admin-layout/admin-layout.component';
import {PartnerModule} from './partner/partner.module';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BasketComponent,
    ProductFormComponent,
    ProductEditComponent,
    ProductCreateComponent,
    LoginComponent,
    ConfirmationComponent,
    PaymentComponent,
    MapComponent,
    NavigationComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
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
    MatIconModule,
    PartnerModule

  ],
  providers: [
    HttpClient,
    BasketService,
    StoreService,
    ProductService,
    OrderService,
    BasketService,
    StoreService,
    ProductService,
    OrderService,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
