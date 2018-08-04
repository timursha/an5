import {Component, OnInit} from '@angular/core';
import {Order} from '../../../models/Order';
import {OrderService} from '../../../services/order.service';

// import { ITEMS } from '/item'
@Component({
  templateUrl: './partnerOrders.component.html',
  styleUrls: ['./partnerOrders.component.scss']
})
export class PartnerOrdersComponent implements OnInit {
  orders: Order[];

  constructor(private orderService: OrderService) {

  }

  ngOnInit(): void {
    this.orderService.getAvailableOrders().subscribe(orders => this.orders = orders);
  }
}
