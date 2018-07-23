import {Component, OnInit} from '@angular/core';
import {Order} from '../../models/Order';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {OrderService} from '../../services/order.service';
import {switchMap} from 'rxjs/internal/operators';
import {StoreService} from '../../services/store.service';
import {Store} from '../../models/Store';
import {loadScript} from '../../services/utils';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private orderService: OrderService,
              private storeService: StoreService) {
  }

  order: Order;
  ymaps: any;

  ngOnInit() {
    loadScript('https://api-maps.yandex.ru/2.1/?lang=ru_RU', 'ymaps').subscribe((ymaps: any) => {
      this.ymaps = ymaps;
      this.ymaps.ready(() => {
        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map").
        const myMap = new this.ymaps.Map('map', {
          // При инициализации карты обязательно нужно указать
          // её центр и коэффициент масштабирования.
          center: [55.76, 37.64], // Москва
          zoom: 10,
          controls: [new this.ymaps.control.GeolocationControl(), 'routePanelControl', 'zoomControl']
        });

        this.route.paramMap.pipe(
          switchMap((params: ParamMap) => this.orderService.getClientOrder(params.get('id')))
        ).subscribe((order: Order) => {
          this.order = order;
          this.storeService.getStore(String(order.shop_id)).subscribe((store: Store) => {
            const control = myMap.controls.get('routePanelControl');

            // Зададим координаты пункта отправления с помощью геолокации.
            control.routePanel.geolocate('from');

            control.routePanel.state.set({
              // Выключим возможность задавать пункт отправления в поле ввода.
              fromEnabled: false,
              // Адрес или координаты пункта отправления.
              from: 'Москва, Льва Толстого 16',
              // Включим возможность задавать пункт назначения в поле ввода.
              toEnabled: true,
              // Адрес или координаты пункта назначения.
              to: [store.latitude, store.longitude]
            });

          });


        });
      });
    });





  }


  init(): void {


  }

}
