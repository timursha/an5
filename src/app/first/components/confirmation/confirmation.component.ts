import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BasketService} from '../../services/basket.service';
import {switchMap} from 'rxjs/internal/operators';
import {Basket} from '../../models/Basket';

@Component({
  selector: 'app-confirmation',
  templateUrl: 'confirmation.component.html',
  styleUrls: ['confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id: string;

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.id = params.get('id')
      )
    );
  }

}
