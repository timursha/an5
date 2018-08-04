import {Routes} from '@angular/router';
import {PartnerMenuComponent} from './components/partnermenu/partnermenu.component';
import {PartnerOrdersComponent} from './components/partnerOrders/partnerOrders.component';
import {OrderComponent} from './components/order/order.component';

export const partnerRouters: Routes = [
  // {
  //   path: '',
  //   children: [ {
  //     path: 'dashboard',
  //     component: DashboardComponent
  // }]}, {
  // path: '',
  // children: [ {
  //   path: 'userprofile',
  //   component: UserProfileComponent
  // }]
  // }, {
  //   path: '',
  //   children: [ {
  //     path: 'icons',
  //     component: IconsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'notifications',
  //         component: NotificationsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'maps',
  //         component: MapsComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'typography',
  //         component: TypographyComponent
  //     }]
  // }, {
  //     path: '',
  //     children: [ {
  //         path: 'upgrade',
  //         component: UpgradeComponent
  //     }]
  // }
  {path: 'menu', component: PartnerMenuComponent},
  {path: 'orders', component: PartnerOrdersComponent},
  {path: 'order/:id', component: OrderComponent},

  {path: '', redirectTo: 'orders', pathMatch: 'full'},

];
