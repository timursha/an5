import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/internal/operators';
import {Order} from '../../models/Order';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  order: Order;

  constructor(private route: ActivatedRoute,
              private orderService: OrderService,) { }


  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.orderService.getClientOrder(params.get('id')))
    ).subscribe((order: Order) => this.order = order);
  }

}
