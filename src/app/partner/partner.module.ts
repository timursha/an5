import { NgModule } from '@angular/core';
import {PartnerMenuComponent} from './components/partnermenu/partnermenu.component';
import {PartnerAdminComponent} from './components/partnerAdmin/partnerAdmin.component';
import {PartnerOrdersComponent} from './components/partnerOrders/partnerOrders.component';
import {OrderComponent} from './components/order/order.component';
import {AdminLayoutComponent} from './layout/admin-layout/admin-layout.component';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../routing.module';
import {HttpClientModule} from '@angular/common/http';
import {NavbarComponent} from './layout/navbar/navbar.component';

@NgModule({
  declarations: [
    PartnerMenuComponent,
    PartnerAdminComponent,
    PartnerOrdersComponent,
    OrderComponent,
    AdminLayoutComponent,
    NavbarComponent
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
  ],
  exports: [AdminLayoutComponent]
})
export class PartnerModule { }
