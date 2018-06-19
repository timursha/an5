import {Component, OnInit} from '@angular/core';
import {Order} from '../../models/Order';
import {OrderService} from '../../services/order.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/internal/operators';

@Component({
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  order: Order;

  constructor(private orderService: OrderService,
              private route: ActivatedRoute) {

  }


  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.orderService.getOrder(params.get('id')))
    ).subscribe((order: Order) => this.order = order);
  }


}
